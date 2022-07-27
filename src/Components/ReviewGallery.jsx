import { useState, useEffect } from "react";
import axios from "axios";
import ReviewCard from "./ReviewCard";

export default function ReviewGallery() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("https://josies-games.herokuapp.com/api/reviews")
      .then((results) => {
        setReviews(results.data.reviews);
      });
  }, []);

  return (
    <section className="Review-Gallery">
      {reviews.map((review) => {
        return <ReviewCard key={review.review_id} review={review} />;
      })}
    </section>
  );
}
