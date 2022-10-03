import { useState, useEffect } from "react";
import axios from "axios";
import ReviewCard from "./ReviewCard";
import Pagination from "./Pagination";

export default function ReviewGallery({ orderBy, sortBy }) {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage] = useState(6);

  const indexOfLastPost = currentPage * reviewsPerPage;
  // 10
  const indexOfFirstPost = indexOfLastPost - reviewsPerPage;
  // 10 - 10 = 0
  const currentReviews = reviews.slice(indexOfFirstPost, indexOfLastPost);
  // 0-9 in the array

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

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
        {currentReviews.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        })}
      </section>
      <Pagination
        reviewsPerPage={reviewsPerPage}
        totalReviews={reviews.length}
        paginate={paginate}
      />
    </section>
  );
}
