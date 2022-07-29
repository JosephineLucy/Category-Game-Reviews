import { useState, useEffect } from "react";
import axios from "axios";
import ReviewCard from "./ReviewCard";

export default function ReviewGallery({ orderBy, sortBy }) {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://josies-games.herokuapp.com/api/reviews?order=${orderBy}&&sort_by=${sortBy}`
      )
      .then((res) => {
        setReviews(res.data.reviews);
        setIsLoading(false);
      });
  }, [orderBy, sortBy]);

  if (isLoading)
    return <p className="Loading-Page">Page loading, please wait...</p>;

  return (
    <section>
      <section className="Review-Gallery">
        {reviews.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        })}
      </section>
    </section>
  );
}
