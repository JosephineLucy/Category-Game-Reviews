import { Link } from "react-router-dom";
import userImage from "../../user.jpg";

const LoginButton = () => {
  return (
    <Link to={"/select-user"}>
      <img className="header-right-icon" src={userImage}></img>
    </Link>
  );
};

export default LoginButton;
