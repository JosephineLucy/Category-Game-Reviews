import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ReviewGallery from "./Components/ReviewGallery";
import IndividualCategory from "./Components/IndividualCategory";
import QueryBar from "./Components/QueryBar";
import IndividualReview from "./Components/IndividualReview";
import SelectUser from "./Components/SelectUser";
import { UserContext } from "./Context/User";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    username: "Guest",
    avatar_url:
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    kudos: 0,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <header>
          <Link to={"/"}>
            <h1 className="App-Title">NC Game Reviews</h1>
          </Link>
          <Link to={"/select-user"}>Select User</Link>
          <img
            className="User-Icon"
            src={user.avatar_url}
            alt={`${user.username} avatar`}
          />
        </header>
        <QueryBar />
        <Routes>
          <Route path="/select-user" element={<SelectUser />}></Route>
          <Route
            path="/categories/:category"
            element={<IndividualCategory />}
          />
          <Route path="/" element={<ReviewGallery />}></Route>
          <Route path="/reviews/:ID" element={<IndividualReview />}></Route>
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
