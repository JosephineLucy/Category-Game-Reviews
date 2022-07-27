import axios from "axios";

export function getCategoryList() {
  return axios.get("https://josies-games.herokuapp.com/api/categories");
}

export function getReviews() {
  return axios.get("https://josies-games.herokuapp.com/api/reviews");
}

export function formatDate(date) {
  let dateArray = [];
  for (let i = 0; i < 10; i++) {
    dateArray.push(date[i]);
  }
  let joinedFormattedDate = dateArray.join("");
  let formattedDate = joinedFormattedDate.split("-").reverse().join("-");
  return formattedDate;
}
