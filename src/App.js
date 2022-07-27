import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ReviewGallery from "./Components/ReviewGallery";
import IndividualCategory from "./Components/IndividualCategory";
import QueryBar from "./Components/QueryBar";
import IndividualReview from "./Components/IndividualReview";

function App() {
  return (
    <div className="App">
      <Link to={"/"}>
        <header>
          <h1 className="App-Title">NC Game Reviews</h1>
        </header>
      </Link>
      <QueryBar />
      <Routes>
        <Route path="/categories/:category" element={<IndividualCategory />} />
        <Route path="/" element={<ReviewGallery />}></Route>
        <Route path="/reviews/:ID" element={<IndividualReview />}></Route>
      </Routes>
    </div>
  );
}

export default App;
