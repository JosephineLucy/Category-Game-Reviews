import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDate } from "../api";
import ReviewTab from "./ReviewTab";
import "../css/IndividualReview.css";
import CommentTab from "./CommentTab";

const IndividualReview = () => {
  const { ID } = useParams();
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);

  console.log(ID, "<<ID");

  useEffect(() => {
    axios
      .get(`https://josies-games.herokuapp.com/api/reviews/${ID}`)
      .then((res) => {
        setReview(res.data.review);
      });
  }, [ID]);

  useEffect(() => {
    axios
      .get(`https://josies-games.herokuapp.com/api/reviews/${ID}/comments`)
      .then((res) => {
        console.log(res.data.comments, "<<<<res.data.comments");
        setComments(res.data.comments);
      });
  }, [ID]);

  function voteClick(number) {
    setVotes((current) => current + number);
    axios
      .patch(`https://josies-games.herokuapp.com/api/reviews/${ID}`, {
        inc_votes: number,
      })
      .then(() => {
        console.log("fulfilled");
        setErr(null);
      })
      .catch((err) => {
        console.log(err);
        setVotes((current) => current - number);
        setErr("Sorry, something went wrong. Please try again.");
      });
  }

  if (err) return <p>{err}</p>;

  if (reviewLoading) return <p className="Loading-Page">Page Loading</p>;

  return (
    <section>
      <img
        className="Review-Card-Image"
        src={review.review_img_url}
        alt={review.title}
      />

      <h2 className="Review-Card-Header">{review.title}</h2>

      <section className="Review-Card-Owner-Date-Wrapper">
        <p className="Review-Card-Owner">
          by <span className="Review-Card-Owner-Name">{review.owner}</span>
        </p>
        <p className="Review-Card-Date">{review.created_at}</p>
      </section>
      <section className="Review-Card-Category-Votes-Wrapper">
        <ReviewTab text={`category: ${review.category}`} />
        <ReviewTab text={`votes: ${review.votes}`} />
      </section>
      <section className="Review-Body">
        <p>{review.review_body}</p>
      </section>
      <section className="Review-Comments">
        <p className="Comments-Section-Title">Comments</p>
        {comments.length > 0 ? (
          comments.map((comment) => {
            return <CommentTab text={comment.body} />;
          })
        ) : (
          <CommentTab text="There are no comments yet, check back later!" />
        )}
      </section>
    </section>
  );
};

export default IndividualReview;
