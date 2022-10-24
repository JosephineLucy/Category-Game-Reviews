import { UserContext } from "../Context/User";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import "../css/SelectUser.css";
import { Link } from "react-router-dom";

export default function SelectUser() {
  const [users, setUsers] = useState([]);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    axios.get("https://josies-games.herokuapp.com/api/users").then((res) => {
      setUsers(res.data.users);
    });
  }, []);

  return (
    <div>
      <section className="Select-User-Title">
        <h1>Change user by selecting from below!</h1>
      </section>
      <div className="User-List">
        {users.map((user) => {
          return (
            <div key={user.username} className="User-Tab">
              <p>{user.username}</p>
              <img
                className="User-Icon"
                src={user.avatar_url}
                alt={user.username}
              />
              <Link to="/" >
              <button
                className="button"
                onClick={() => {
                  setUser(user);
                }}
              >
                Select User
              </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
