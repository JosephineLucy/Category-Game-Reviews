import "../css/ReviewCard.css";
import ReviewTab from "./ReviewTab";
import { Link } from "react-router-dom";
import { formatDate } from "./common/helpers";

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
      <section className="Review-Card-Wrapper">
        <Link to={`/reviews/${review.review_id}`}>
          <h3 className="Review-Card-Header">{review.title}</h3>
        </Link>
        <section className="Review-Card-Owner-Date-Wrapper">
          <p className="Review-Card-Owner">
            by <span className="Review-Card-Owner-Name">{review.owner}</span>
          </p>
          <p className="Review-Card-Date">{formatDate(review.created_at)}</p>
        </section>
        <section className="Review-Card-Category-Votes-Wrapper">
          <Link to={`/categories/${review.category}`}>
            <ReviewTab text={`category: ${review.category}`} />
          </Link>
          <ReviewTab text={`votes: ${review.votes}`} />
        </section>
      </section>
    </section>
  );
}
