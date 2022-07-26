import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ReviewGallery from "./Components/ReviewGallery";
import IndividualCategory from "./Components/IndividualCategory";

function App() {
  return (
    <div className="App">
      <Link to={"/"}>
        <header>
          <h1 className="App-Title">NC Game Reviews</h1>
        </header>
      </Link>
      <Routes>
        <Route path="/categories/strategy" element={<IndividualCategory />} />
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
        <Route path="/" element={<ReviewGallery />}></Route>
      </Routes>
    </div>
  );
}

export default App;
