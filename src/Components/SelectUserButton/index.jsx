import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/User";

const SelectUserButton = () => {
  const { user } = useContext(UserContext);
  const { avatar_url, username } = user;

  return (
    <Link to={"/select-user"}>
      <img
        className="header-right-icon"
        src={avatar_url}
        alt="user"
        title={`Signed in as ${username}`}
      ></img>
    </Link>
  );
};

export default SelectUserButton;
