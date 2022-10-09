import {Link} from "react-router-dom";
import '../css/Home.css'

const Home = () => {
  return (
    <section className="homepage">
    <section className="hero-section">
      <section className="hero-text-and-button">
    <h1 className="hero-title">Category Game Reviews</h1>
    <p className="hero-text">Let us help you decide on your next game by reading our reviews. You can also rate our reviews and leave comments to help other users make their choice.</p>
<Link to='/reviews'><button className="all-reviews-button">Reviews</button></Link>
        </section>
        <section className="hero-image-container">
          <img className="hero-image" src='https://media.tenor.com/-OiahIYVp_AAAAAC/player.gif' alt='cat-with-mouse'></img>
        </section>
      </section>
    </section>
  );
};

export default Home;
