import ReviewGallery from "./ReviewGallery";
import { useState } from "react";
const Home = () => {
  const [orderBy, setOrderBy] = useState("desc");
  const [sortBy, setSortBy] = useState("created_at");

  function handleOrder(e) {
    setOrderBy(e.target.value);
  }

  function handleSort(e) {
    setSortBy(e.target.value);
  }

  return (
    <section>
    <section className="sort-container">
    <section className="Sort-Reviews">
        <select
          className="select"
          name="order-by"
          id="order-by"
          onChange={(e) => handleOrder(e)}
        >
          <option value="">Order-by</option>
          <option value="desc">Order-by descending</option>
          <option value="asc">Order-by ascending</option>
        </select>

        <select
          className="select"
          name="sort-by"
          id="sort-by"
          onChange={(e) => handleSort(e)}
        >
          <option value="">Sort-by</option>
          <option value="created_at">Date Created</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
      </section>
    </section>
      
      <ReviewGallery orderBy={orderBy} sortBy={sortBy} />
    </section>
  );
};

export default Home;
