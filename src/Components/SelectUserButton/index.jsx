import { Link } from "react-router-dom";

const SelectUserButton = ({ user }) => {
  return (
    <Link to={"/select-user"}>
      <img
        className="header-right-icon"
        src={user.avatar_url}
        alt="user"
        title={`Signed in as ${user.username}`}
      ></img>
    </Link>
  );
};

export default SelectUserButton;
