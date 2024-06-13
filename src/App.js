import { Routes, Route, BrowserRouter } from "react-router-dom";
import { UserContext } from "./context/User";
import { useState } from "react";
import AppHeader from "./components/AppHeader";
import LinkBar from "./components/LinkBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ReviewsHome from "./pages/ReviewsHome";
import IndividualReview from "./components/IndividualReview";
import ReviewsByCategory from "./pages/ReviewsByCategory";

import "./App.css";

function App() {
  const [user, setUser] = useState();

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="app">
          <header>
            <AppHeader />
          </header>
          <LinkBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/categories/:category"
              element={<ReviewsByCategory />}
            />
            <Route path="/all-reviews" element={<ReviewsHome />} />
            <Route path="/reviews/:ID" element={<IndividualReview />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
