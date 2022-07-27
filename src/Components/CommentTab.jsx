import "../css/CommentTab.css";

const CommentTab = ({ text }) => {
  return (
    <section className="Comment-Tab">
      <p className="Comment-Tab-Text">{text}</p>
    </section>
  );
};

export default CommentTab;
