import { useState } from "react";
import ReviewGallery from "../../components/ReviewGallery";
import SortBar from "../../components/SortBar";

const ReviewsHome = () => {
  const [orderBy, setOrderBy] = useState("desc");
  const [sortBy, setSortBy] = useState("created_at");

  return (
    <>
      <SortBar setOrderBy={setOrderBy} setSortBy={setSortBy} />
      <ReviewGallery orderBy={orderBy} sortBy={sortBy} />
    </>
  );
};

export default ReviewsHome;
