import { useContext } from "react";
import { UserContext } from "../Context/User";
import "../css/UserProfile.css";

const UserProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <section className="User-Profile">
      <section className="User-Title">
        <h2>Welcome {user.username}!</h2>
        <img
          className="User-Profile-Icon"
          src={user.avatar_url}
          alt={`${user.username} avatar`}
        ></img>
      </section>
    </section>
  );
};

export default UserProfile;
