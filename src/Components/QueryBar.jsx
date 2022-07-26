import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/QueryBar.css";
import { getCategoryList } from "../api";

const QueryBar = () => {
  const [categoryList, setCatergoryList] = useState([]);

  useEffect(() => {
    getCategoryList().then((res) => {
      setCatergoryList(res.data.categories);
    });
  }, []);

  return (
    <nav className="QueryBar">
      {categoryList.map((category) => {
        return (
          <Link
            key={category.slug}
            className="Tab-QueryBar"
            to={`/categories/${category.slug}`}
          >
            {category.slug} Games
          </Link>
        );
      })}
    </nav>
  );
};

export default QueryBar;

/*

      <Link className="Tab-QueryBar" to={"/categories/hidden-roles"}>
        Hidden-Roles Games
      </Link>
      <Link className="Tab-QueryBar" to={"/categories/push-your-luck"}>
        Push-Your-Luck Games
      </Link>
      <Link className="Tab-QueryBar" to={"/categories/roll-and-write"}>
        Roll-and-Write Games
      </Link>
      <Link className="Tab-QueryBar" to={"/categories/deck-building"}>
        Deck-Building Games
      </Link>
      <Link className="Tab-QueryBar" to={"/categories/engine-building"}>
        Engine-Building Games
      </Link>

*/
