import { UserContext } from "../Context/User";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import "../css/SelectUser.css";

export default function SelectUser() {
  const [users, setUsers] = useState([]);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    axios.get("https://josies-games.herokuapp.com/api/users").then((res) => {
      console.log(res.data.users);
      setUsers(res.data.users);
    });
  }, []);

  return (
    <div>
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
              <button
                className="button"
                onClick={() => {
                  setUser(user);
                }}
              >
                Select User
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
