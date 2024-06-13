import { apiServiceInstance } from "./axios";

export const usersService = {
  getUsers: () => apiServiceInstance.get("/users"),
};

export const categoryService = {
  getCategories: () => apiServiceInstance.get("/categories"),
};

export const reviewsService = {
  getReviews: () => apiServiceInstance.get("/reviews"),
};
