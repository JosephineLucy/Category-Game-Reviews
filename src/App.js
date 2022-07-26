import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ReviewGallery from "./Components/ReviewGallery";
import IndividualCategory from "./Components/IndividualCategory";
import QueryBar from "./Components/QueryBar";

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
      </Routes>
    </div>
  );
}

export default App;

/*

 <Route
          path="/categories/hidden-roles"
          element={<IndividualCategory />}
        ></Route>
        <Route
          path="/categories/dexterity"
          element={<IndividualCategory />}
        ></Route>
        <Route
          path="/categories/push-your-luck"
          element={<IndividualCategory />}
        ></Route>
        <Route
          path="/categories/roll-and-write"
          element={<IndividualCategory />}
        ></Route>
        <Route
          path="/categories/deck-building"
          element={<IndividualCategory />}
        ></Route>
        <Route
          path="/categories/engine-building"
          element={<IndividualCategory />}
        ></Route>

*/
