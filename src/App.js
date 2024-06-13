import { Routes, Route } from "react-router-dom";
import { UserContext } from "./context/User";
import { useState } from "react";
import Home from "./pages/Home";
import LinkBar from "./components/LinkBar";
import ReviewsHome from "./pages/ReviewsHome";
import IndividualReview from "./components/IndividualReview";
import FilterByCategory from "./components/FilterByCategory";
import AppHeader from "./components/AppHeader";
import Login from "./pages/Login";

import "./App.css";

function App() {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="app">
        <header>
          <AppHeader />
        </header>
        <LinkBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/categories/:category" element={<FilterByCategory />} />
          <Route path="/all-reviews" element={<ReviewsHome />} />
          <Route path="/reviews/:ID" element={<IndividualReview />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
