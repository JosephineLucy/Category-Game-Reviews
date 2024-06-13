import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/User";
import { loadUsers } from "./helpers";
import UserTab from "../../components/UserTab";
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
          return <UserTab user={user} />;
        })}
      </div>
    </>
  );
}
