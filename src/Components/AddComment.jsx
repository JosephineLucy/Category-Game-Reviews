import { useState, useContext } from "react";
import axios from "axios";
import "../css/AddComment.css";
import { UserContext } from "../context/User";

export default function AddComment({ ID, comments, setComments }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [err, setErr] = useState(null);
  const [success, setSuccess] = useState(null);
  const [body, setBody] = useState("");
  const { user } = useContext(UserContext);

  const commentToAdd = {
    username: user.username,
    body: body,
  };
  console.log(user.username);
  function addComment(e) {
    e.preventDefault();
    setIsSending(true);
    return axios
      .post(
        `https://category-game-reviews.onrender.com/api/reviews/${ID}/comments`,
        commentToAdd
      )
      .then(() => {
        setIsClicked(false);
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
        setIsClicked(false);
        setIsSending(false);
        setErr("Sorry, something went wrong. Please try again.");
        console.log(err);
      });
  }

  if (isClicked) {
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
            setIsClicked(false);
          }}
        >
          Cancel
        </button>
      </form>
    );
  }

  return (
    <div>
      {err ? <p>{err}</p> : null}
      {isSending ? <p>Your comment is being posted, please wait.</p> : null}
      {success ? <p>{success}</p> : null}
      <button
        className="post-btn"
        onClick={(e) => {
          setIsClicked(true);
        }}
      >
        Post a Comment
      </button>
    </div>
  );
}
