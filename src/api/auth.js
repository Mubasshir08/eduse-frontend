import API from "./api";

// Login request
export const loginUser = (credentials) =>
  API.post("/auth/login", credentials);

// Register request
export const registerUser = (formData) =>
  API.post("/auth/register", formData);

// Logout 
export const logoutUser = () => {
  localStorage.removeItem("user");
  window.location.href = "/login";
};

export const getProfile = () => API.get("/auth/profile");
