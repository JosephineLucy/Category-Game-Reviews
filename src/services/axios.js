import axios from "axios";

export const apiServiceInstance = axios.create({
  baseURL: "https://category-game-reviews.onrender.com/api/",
});
