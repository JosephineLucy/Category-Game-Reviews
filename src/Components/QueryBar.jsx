// import axios from "axios";
// import { useState, useEffect } from "react";
// import { getCategoryList } from "../api";
import { Routes, Route, Link } from "react-router-dom";
import IndividualCategory from "./IndividualCategory";
import "../css/QueryBar.css";

const QueryBar = () => {
  return (
    <nav className="QueryBar">
      <Link className="Tab-QueryBar" to={"/categories/strategy"}>
        Strategy Games
      </Link>
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
    </nav>
  );
};

export default QueryBar;
