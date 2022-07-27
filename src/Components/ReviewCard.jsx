import "../css/ReviewCard.css";
import ReviewTab from "./ReviewTab";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { formatDate } from "../api";

export default function ReviewCard({ review }) {
  return (
    <section className="Review-Card">
      <Link to={`/reviews/${review.review_id}`}>
        <img
          className="Review-Card-Image"
          src={review.review_img_url}
          alt={review.title}
        />
      </Link>
      <Link to={`/reviews/${review.review_id}`}>
        <h2 className="Review-Card-Header">{review.title}</h2>
      </Link>
      <section className="Review-Card-Owner-Date-Wrapper">
        <p className="Review-Card-Owner">
          by <span className="Review-Card-Owner-Name">{review.owner}</span>
        </p>
        <p className="Review-Card-Date">{formatDate(review.created_at)}</p>
      </section>
      <section className="Review-Card-Category-Votes-Wrapper">
        <ReviewTab text={`category: ${review.category}`} />
        <ReviewTab text={`votes: ${review.votes}`} />
      </section>
    </section>
  );
}
