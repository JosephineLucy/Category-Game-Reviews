import axios from "axios";

export function getCategoryList() {
  return axios.get("https://josies-games.herokuapp.com/api/categories");
}
