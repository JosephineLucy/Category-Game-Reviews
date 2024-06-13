import axios from "axios";
import { useState, useContext } from "react";
import { UserContext } from "../context/User";
import "../css/AddComment.css";

export default function AddComment({ ID, setComments }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [err, setErr] = useState(null);
  const [success, setSuccess] = useState(null);
  const [body, setBody] = useState("");
  const { user } = useContext(UserContext);

  const commentToAdd = {
    username: user.username,
    body: body,
  };

  function addComment(e) {
    e.preventDefault();
    setIsSending(true);
    return axios
      .post(
        `https://category-game-reviews.onrender.com/api/reviews/${ID}/comments`,
        commentToAdd
      )
      .then(() => {
        setIsFormOpen(false);
        axios
          .get(
            `https://category-game-reviews.onrender.com/api/reviews/${ID}/comments`
          )
          .then((res) => {
            setComments(res.data.comments);
            setIsSending(false);
            setSuccess("You posted a comment!");
            setErr(null);
            console.log("success");
          });
      })
      .catch((err) => {
        setIsFormOpen(false);
        setIsSending(false);
        setErr("Sorry, something went wrong. Please try again.");
        console.log(err);
      });
  }

  if (isFormOpen) {
    return (
      <form className="Comment-Form" onSubmit={addComment}>
        <fieldset className="Form-Input">
          <div>
            <label htmlFor="body">Comment:</label>
            <input
              minLength={2}
              maxLength={500}
              className="Input-Body"
              required
              placeholder="Enter your comment here"
              onChange={(e) => {
                setBody(e.target.value);
              }}
              id="body"
              type="text"
            />
          </div>
        </fieldset>
        <button className="submit-btn" type="submit">
          Submit comment
        </button>
        <button className="reset-btn" type="reset">
          Reset form
        </button>
        <button
          className="cancel-btn"
          onClick={() => {
            setIsFormOpen(false);
          }}
        >
          Cancel
        </button>
      </form>
    );
  }

  return (
    <div>
      {err && <p>{err}</p>}
      {isSending && <p>Your comment is being posted, please wait.</p>}
      {success && <p>{success}</p>}
      <button
        className="post-btn"
        onClick={(e) => {
          setIsFormOpen(true);
        }}
      >
        Post a Comment
      </button>
    </div>
  );
}
