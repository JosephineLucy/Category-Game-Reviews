import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/User";
import { loadUsers } from "./helpers";
import "./styles.css";

export default function Login() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    loadUsers(setIsLoading, setUsers);
  }, []);

  if (isLoading) return <p>Loading please wait...</p>;

  return (
    <>
      <div className="login-page__title-container">
        <p>Login as a user by selecting from below!</p>
      </div>
      <div className="login-page__user-list">
        {users.map((user) => {
          return (
            <div key={user.username} className="User-Tab">
              <p>{user.username}</p>
              <img
                className="User-Icon"
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
                  Select User
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
