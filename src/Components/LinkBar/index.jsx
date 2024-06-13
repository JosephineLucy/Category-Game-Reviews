import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { formatCategory } from "./helpers";
import { categoryService } from "../../services/api";
import "./styles.css";

const LinkBar = () => {
  const [categoryList, setCatergoryList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    categoryService.getCategories().then((res) => {
      setCatergoryList(res.data.categories);
    });
    setIsLoading(false);
  }, []);

  if (isLoading) return <p>Loading categories, please wait...</p>;

  return (
    <nav className="link-bar">
      <Link className="link-bar__link" to="/all-reviews">
        All Categories
      </Link>
      {categoryList.map((category) => {
        return (
          <Link
            key={category.slug}
            className="link-bar__link"
            to={`/categories/${category.slug}`}
          >
            {formatCategory(category.slug)} Games
          </Link>
        );
      })}
    </nav>
  );
};

export default LinkBar;
