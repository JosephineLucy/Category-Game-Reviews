import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <div>
      <Link to={"/"}>
        <img
          className="App-Title"
          src="https://i.imgur.com/jwJSDYE.png"
          alt="Category Logo"
        ></img>
      </Link>
    </div>
  );
};

export default HomeButton;
