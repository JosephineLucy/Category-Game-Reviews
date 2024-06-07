import { Routes, Route } from "react-router-dom";
import "./App.css";
import QueryBar from "./components/QueryBar";
import IndividualReview from "./components/IndividualReview";
import SelectUser from "./components/SelectUser";
import { UserContext } from "./context/User";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./components/Home";
import ReviewsHome from "./components/ReviewsHome";
import FilterByCategory from "./components/FilterByCategory";
import UserProfile from "./components/UserProfile";
import AppHeader from "./components/AppHeader";

function App() {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://category-game-reviews.onrender.com/api/users")
      .then((res) => {
        setUser(res.data.users[0]);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Page Loading...</p>;
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <header>
          <AppHeader />
        </header>
        <QueryBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/select-user" element={<SelectUser />}></Route>
          <Route path="/categories/:category" element={<FilterByCategory />} />
          <Route path="/all-reviews" element={<ReviewsHome />}></Route>
          <Route path="/reviews/:ID" element={<IndividualReview />}></Route>
          <Route
            path={`/user/${user.username}`}
            element={<UserProfile />}
          ></Route>
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
