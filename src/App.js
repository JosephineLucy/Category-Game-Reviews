import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import QueryBar from "./Components/QueryBar";
import IndividualReview from "./Components/IndividualReview";
import SelectUser from "./Components/SelectUser";
import { UserContext } from "./Context/User";
import { useState } from "react";
import Home from "./Components/Home";
import FilterByCategory from "./Components/FilterByCategory";
import UserProfile from "./Components/UserProfile";

function App() {
  const [user, setUser] = useState({
    username: "Guest User",
    avatar_url: "https://i.imgur.com/4sqm8rs.png",
    kudos: 0,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <header>
          <Link to={"/"}>
            <img
              className="App-Title"
              src="https://i.imgur.com/BT02TWj.png"
              alt="Category Logo"
            ></img>
          </Link>
          <section className="User-Info">
            <Link to={"/select-user"}>
              <img
                className="User-Icon"
                src={user.avatar_url}
                alt={`${user.username} avatar`}
              />
              <p className="User-Info-Username">{user.username}</p>
            </Link>
          </section>
        </header>
        <QueryBar />
        <Routes>
          <Route path="/select-user" element={<SelectUser />}></Route>
          <Route path="/categories/:category" element={<FilterByCategory />} />
          <Route path="/" element={<Home />}></Route>
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
