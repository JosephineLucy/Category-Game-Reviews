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

  useEffect(() => {
    axios.get("https://josies-games.herokuapp.com/api/users").then((res) => {
      setUser(res.data.users[0]);
      setIsLoading(false);
    });
  }, []);


  if (isLoading) {
    return <p>Page Loading...</p>;
  }

useEffect(()=>{
  fetch('https://josies-games.herokuapp.com/api/users').then((response)=>{
    return response.json()
  }).then((data)=>{
    setUser(data.users[0])
  })
}, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <header>
          <Link to={"/"}>
            <img
              className="App-Title"
              src="https://i.imgur.com/QSCosaV.png"
              alt="Category Logo"
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
