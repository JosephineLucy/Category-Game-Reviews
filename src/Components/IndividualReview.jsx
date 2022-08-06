import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDate } from "../api";
import ReviewTab from "./ReviewTab";
import "../css/IndividualReview.css";
import CommentTab from "./CommentTab";
import AddComment from "./AddComment";

const IndividualReview = () => {
  const { ID } = useParams();
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);
  const [votes, setVotes] = useState(0);
  const [err, setErr] = useState(null);
  const [reviewLoading, setReviewLoading] = useState(true);

  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    axios
      .get(`https://josies-games.herokuapp.com/api/reviews/${ID}`)
      .then((res) => {
        setReview(res.data.review);
        setReviewLoading(false);
      });
    axios
      .get(`https://josies-games.herokuapp.com/api/reviews/${ID}/comments`)
      .then((res) => {
        setComments(res.data.comments);
      });
  }, [ID, isDeleted]);

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

  if (reviewLoading)
    return <p className="Loading-Page">Page loading, please wait...</p>;

  return (
    <section>
      <img
        className="Review-Card-Image"
        src={review.review_img_url}
        alt={review.title}
      />

      <h2 className="Review-Card-Title">{review.title}</h2>

      <section className="Review-Card-Owner-Date-Wrapper">
        <p className="Review-Card-Owner">
          by <span className="Review-Card-Owner-Name">{review.owner}</span>
        </p>
        <p className="Review-Card-Date">{formatDate(review.created_at)}</p>
      </section>
      <section className="Review-Body">
        <p>{review.review_body}</p>
      </section>
      <section className="Review-Comments">
        <p className="Comments-Section-Title">Comments</p>
        {comments.length > 0 ? (
          comments.map((comment) => {
            return (
              <CommentTab
                key={comment.comment_id}
                id={comment.comment_id}
                text={comment.body}
                author={comment.author}
                date={comment.created_at}
                setIsDeleted={setIsDeleted}
              />
            );
          })
        ) : (
          <CommentTab text="There are no comments yet, check back later or click below to be the first to comment!" />
        )}
      </section>
      <AddComment setComments={setComments} comments={comments} ID={ID} />
      <section className="Review-Card-Category-Votes-Wrapper">
        <ReviewTab text={`category: ${review.category}`} />
        <ReviewTab text={`votes: ${votes + review.votes}`} />
      </section>
      <section className="Vote-Buttons">
        <button
          className="Up-Vote"
          onClick={() => {
            voteClick(1);
          }}
        >
          Up Vote
        </button>
        <button
          className="Down-Vote"
          onClick={() => {
            voteClick(-1);
          }}
        >
          Down Vote
        </button>
      </section>
    </section>
  );
};

export default IndividualReview;
