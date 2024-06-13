import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { formatCategory, categoryService } from "../services/api";
import "../css/QueryBar.css";

const QueryBar = () => {
  const [categoryList, setCatergoryList] = useState([]);

  useEffect(() => {
    categoryService.getCategories().then((res) => {
      setCatergoryList(res.data.categories);
    });
  }, []);

  return (
    <section className="Queries">
      <nav className="QueryBar">
        <Link className="Tab-QueryBar" to="/all-reviews">
          All Categories
        </Link>
        {categoryList.map((category) => {
          return (
            <Link
              key={category.slug}
              className="Tab-QueryBar"
              to={`/categories/${category.slug}`}
            >
              {formatCategory(category.slug)} Games
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default QueryBar;
