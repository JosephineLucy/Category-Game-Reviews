import { Routes, Route } from "react-router-dom";
import { UserContext } from "./context/User";
import { useState } from "react";
import Home from "./pages/Home";
import QueryBar from "./components/QueryBar";
import IndividualReview from "./components/IndividualReview";
import SelectUser from "./components/SelectUser";
import ReviewsHome from "./components/ReviewsHome";
import FilterByCategory from "./components/FilterByCategory";
import UserProfile from "./components/UserProfile";
import AppHeader from "./components/AppHeader";
import "./app.css";

function App() {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="app">
        <header>
          <AppHeader />
        </header>
        <QueryBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/select-user" element={<SelectUser />} />
          <Route path="/categories/:category" element={<FilterByCategory />} />
          <Route path="/all-reviews" element={<ReviewsHome />} />
          <Route path="/reviews/:ID" element={<IndividualReview />} />
          <Route path="/user/:username" element={<UserProfile />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
