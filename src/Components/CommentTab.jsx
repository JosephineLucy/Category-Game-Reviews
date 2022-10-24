import "../css/CommentTab.css";
import { useContext, useState } from "react";
import { UserContext } from "../Context/User";
import axios from "axios";
import { formatDate } from "../api";

const CommentTab = ({ text, author, id, date, setIsDeleted, commentLength }) => {
  const { user } = useContext(UserContext);
  const [isSending, setIsSending] = useState(false);
  const [err, setErr] = useState(null);
  const [success, setSuccess] = useState(null);

  const formattedDate = formatDate(date);

  function handleDelete(e) {
    e.preventDefault();
    setIsSending(true);
    axios
      .delete(
        `https://josies-games.herokuapp.com/api/comments/${e.target.value}`
      )
      .then(() => {
        setIsSending(false);
        setSuccess("This comment has been successfully deleted");
        setIsDeleted(true);
        setErr(null);
        console.log("success");
      })
      .catch((err) => {
        setIsSending(false);
        setErr("Sorry, something went wrong. Please try again.");
        console.log(err);
      });
  }

  return (
    <section className="Comment-Tab">
      <p>{formattedDate}</p>
      {commentLength > 0 ? <p>{author} says:</p> : null}
      <p className="Comment-Tab-Text">{text}</p>
      {user.username === author ? (
        <button
          value={id}
          onClick={(e) => {
            handleDelete(e);
          }}
        >
          Delete Comment
        </button>
      ) : null}
      {err ? <p>{err}</p> : null}
      {isSending ? <p>Your comment is being deleted, please wait.</p> : null}
      {success ? <p>{success}</p> : null}
    </section>
  );
};

export default CommentTab;
