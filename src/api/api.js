// src/api/api.js
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
});

// Request interceptor
API.interceptors.request.use((req) => {
  const user = localStorage.getItem("user");
  if (user) {
    const token = JSON.parse(user).token;
    req.headers.Authorization = `Bearer ${token}`;
  }
  
  // Don't set Content-Type for FormData (let browser set it with boundary)
  // This is important for image uploads
  if (req.data instanceof FormData) {
    delete req.headers['Content-Type'];
  }
  
  return req;
});

// Response interceptor (optional - for better error handling)
API.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle specific error cases
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default API;