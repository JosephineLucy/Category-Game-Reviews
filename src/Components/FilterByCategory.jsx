import IndividualCategory from "./IndividualCategory";
import { useState } from "react";
import SortBar from "./SortBar";
const FilterByCategory = () => {
  const [orderBy, setOrderBy] = useState("desc");
  const [sortBy, setSortBy] = useState("created_at");

  return (
    <section>
      <SortBar setOrderBy={setOrderBy} setSortBy={setSortBy} />
      <IndividualCategory orderBy={orderBy} sortBy={sortBy} />
    </section>
  );
};

export default FilterByCategory;
