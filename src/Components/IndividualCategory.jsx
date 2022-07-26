import { useState, useEffect } from "react";
import axios from "axios";
import ReviewCard from "./ReviewCard";
import "../css/IndividualCategory.css";
import { useParams } from "react-router-dom";

const IndividualCategory = () => {
  const [reviews, setReviews] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://josies-games.herokuapp.com/api/reviews?category=${category}`
      )
      .then((results) => {
        setReviews(results.data.reviews);
      });
  }, [category]);

  return (
    <section>
      <div className="Category-Title">
        <h2>{category}</h2>
      </div>
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
  );
};

export default IndividualCategory;
