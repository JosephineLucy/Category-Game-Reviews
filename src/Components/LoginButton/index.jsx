import { Link } from "react-router-dom";
import userImage from "../../user.jpg";
import "./styles.css";

const LoginButton = () => {
  return (
    <Link to={"/login"}>
      <img className="login-button" src={userImage}></img>
    </Link>
  );
};

export default LoginButton;
