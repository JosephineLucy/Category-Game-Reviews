import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__left-content-wrapper">
        <h1 className="home__title">Category Game Reviews</h1>
        <p className="home__text">
          Let us help you decide on your next game by reading our reviews. You
          can also rate our reviews and leave comments to help other users make
          their choice.
        </p>
        <Link to="/all-reviews" className="all-reviews-button">
          Click here to see our reviews!
        </Link>
      </div>
      <img
        className="hero-image"
        src="https://media.tenor.com/-OiahIYVp_AAAAAC/player.gif"
        alt="cat-with-mouse"
        title="cat gif"
      ></img>
    </div>
  );
};

export default Home;
