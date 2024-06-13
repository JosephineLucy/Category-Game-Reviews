import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/User";
import "./styles.css";

const UserTab = ({ user }) => {
  const { setUser } = useContext(UserContext);

  return (
    <div key={user.username} className="user-tab">
      <p>{user.username}</p>
      <img
        className="user-tab__icon"
        src={user.avatar_url}
        alt={user.username}
      />
      <Link to="/">
        <button
          className="button"
          onClick={() => {
            setUser(user);
          }}
        >
          {`Login as ${user.username}`}
        </button>
      </Link>
    </div>
  );
};

export default UserTab;
