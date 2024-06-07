import { Link } from "react-router-dom";
import { UserContext } from "../../Context/User";

const SelectUserButton = () => {
  const { avatar_url, username } = UserContext;

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
