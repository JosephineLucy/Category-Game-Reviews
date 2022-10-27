import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import QueryBar from "./Components/QueryBar";
import IndividualReview from "./Components/IndividualReview";
import SelectUser from "./Components/SelectUser";
import { UserContext } from "./Context/User";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./Components/Home";
import ReviewsHome from "./Components/ReviewsHome";
import FilterByCategory from "./Components/FilterByCategory";
import UserProfile from "./Components/UserProfile";

function App() {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [viewMore, setViewMore] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get("https://josies-games.herokuapp.com/api/users").then((res) => {
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
          <section className="header-left">
          <Link to={"/"}>
            <img
              className="App-Title"
              src="https://i.imgur.com/QSCosaV.png"
              alt="Category Logo"
            ></img>
          </Link>
          </section>
          <section className='header-menu'>
            {viewMore ? <section className="view-more-button-container"><button className="view-more-button" onClick={()=> {setViewMore(false)}}>...</button></section> : <section className='view-more-menu'><section className="view-less-button-container"><button className="view-less-button" onClick={()=> {setViewMore(true)}}>-</button></section>
            <section className="view-more-links"> <img
              src="https://i.imgur.com/0sPugzX.png"
              alt="search"
              className="header-right-icon"
              title="Search"
            ></img>
            <Link to={"/select-user"}>
              <img
                className="header-right-icon"
                src={user.avatar_url}
                alt="user"
                title={`Signed in as ${user.username}`}
              ></img>
            </Link>
            <Link to={"/"}>
              <img
                src="https://i.imgur.com/EBXR7I8.png"
                alt="home"
                className="header-right-icon"
                title="Home"
              ></img>
            </Link>
            </section>
            </section>}
          </section>
          <section className="header-right">
            <img
              src="https://i.imgur.com/0sPugzX.png"
              alt="search"
              className="header-right-icon"
              title="Search"
            ></img>
            <Link to={"/select-user"}>
              <img
                className="header-right-icon"
                src={user.avatar_url}
                alt="user"
                title={`Signed in as ${user.username}`}
              ></img>
            </Link>
            <Link to={"/"}>
              <img
                src="https://i.imgur.com/EBXR7I8.png"
                alt="home"
                className="header-right-icon"
                title="Home"
              ></img>
            </Link>
          </section>
        </header>
        <QueryBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/select-user" element={<SelectUser />}></Route>
          <Route path="/categories/:category" element={<FilterByCategory />} />
          <Route path="/reviews" element={<ReviewsHome />}></Route>
          <Route path="/reviews/:ID" element={<IndividualReview />}></Route>
          <Route
            path={`/user/${user.username}`}
            element={<UserProfile />}
          ></Route>
        </Routes>
        <section className="footer"></section>
      </div>
    </UserContext.Provider>
  );
}

export default App;
