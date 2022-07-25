import "../css/ReviewCard.css";
import ReviewTab from "./ReviewTab";

export default function ReviewCard({
  review,
  title,
  ID,
  designer,
  owner,
  image,
  body,
  category,
  dateCreated,
  votes,
}) {
  function formatDate(date) {
    let dateArray = [];
    for (let i = 0; i < 10; i++) {
      dateArray.push(date[i]);
    }
    let joinedFormattedDate = dateArray.join("");
    let formattedDate = joinedFormattedDate.split("-").reverse().join("-");
    return formattedDate;
  }

  return (
    <section className="Review-Card">
      <img className="Review-Card-Image" src={image} alt={title} />
      <h2 className="Review-Card-Header">{title}</h2>
      <section className="Review-Card-Owner-Date-Wrapper">
        <p className="Review-Card-Owner">
          by <span className="Review-Card-Owner-Name">{owner}</span>
        </p>
        <p className="Review-Card-Date">{formatDate(dateCreated)}</p>
      </section>
      <section className="Review-Card-Category-Votes-Wrapper">
        <ReviewTab text={`category: ${category}`} />
        <ReviewTab text={`votes: ${votes}`} />
      </section>
    </section>
  );
}
