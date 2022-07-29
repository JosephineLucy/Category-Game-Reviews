import { useContext, useState, useEffect } from "react";
import { UserContext } from "../Context/User";
import "../css/UserProfile.css";
import axios from "axios";

const UserProfile = () => {
  const { user } = useContext(UserContext);
  const [userComments, setUserComments] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get(`https://josies-games.herokuapp.com/api/reviews/${ID}/comments`)
  //       .then((res) => {
  //         console.log(res.data.comments);
  //       });
  //   }, [user.username]);

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
