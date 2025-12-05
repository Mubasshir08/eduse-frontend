import API from "./api";

// Login request (Regular users)
export const loginUser = (credentials) =>
  API.post("/auth/login", credentials);

// Admin Login request
export const adminLogin = (credentials) =>
  API.post("/auth/admin/login", credentials);

// Register request
export const registerUser = (formData) =>
  API.post("/auth/register", formData);

// Logout 
export const logoutUser = () => {
  localStorage.removeItem("user");
  window.location.href = "/login";
};

// Admin Logout (redirects to admin login)
export const adminLogout = () => {
  localStorage.removeItem("user");
  window.location.href = "/login";
};

// Seller Logout (redirects to home)
export const sellerLogout = () => {
  localStorage.removeItem("sellerToken");
  localStorage.removeItem("seller");
  window.location.href = "/";
}

// Get user profile
export const getProfile = () => API.get("/auth/profile");
