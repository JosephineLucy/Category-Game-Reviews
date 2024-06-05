import { useState, useEffect } from "react";
import axios from "axios";
import ReviewCard from "./ReviewCard";
import "../css/IndividualCategory.css";
import { useParams } from "react-router-dom";

const IndividualCategory = ({ orderBy, sortBy }) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { category } = useParams();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://category-game-reviews.onrender.com/api/reviews?category=${category}&&order=${orderBy}&&sort_by=${sortBy}`
      )
      .then((res) => {
        setReviews(res.data.reviews);
        setIsLoading(false);
      });
  }, [orderBy, sortBy, category]);

  if (isLoading)
    return <p>Page loading, please wait...</p>;

  return (
    <section>
      <section className="Gallery">
        {reviews.map((review) => {
          return (
            <ReviewCard
              key={review.review_id}
              review={review}
              ID={review.review_id}
              title={review.title}
              designer={review.designer}
              owner={review.owner}
              image={review.review_img_url}
              body={review.review_body}
              category={review.category}
              dateCreated={review.created_at}
              votes={review.votes}
            />
          );
        })}
      </section>
    </section>
  );
};

export default IndividualCategory;
