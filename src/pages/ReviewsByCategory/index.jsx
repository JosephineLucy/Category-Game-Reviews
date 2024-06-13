import { useState } from "react";
import SortBar from "../../components/SortBar";
import IndividualCategory from "../../components/IndividualCategory";

const ReviewsByCategory = () => {
  const [orderBy, setOrderBy] = useState("desc");
  const [sortBy, setSortBy] = useState("created_at");

  return (
    <section>
      <SortBar setOrderBy={setOrderBy} setSortBy={setSortBy} />
      <IndividualCategory orderBy={orderBy} sortBy={sortBy} />
    </section>
  );
};

export default ReviewsByCategory;
