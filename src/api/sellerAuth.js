// api/sellerAuth.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL;

// Create axios instance with seller token
const sellerAPI = axios.create({
  baseURL: API_URL,
});

// Add token to requests
sellerAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('sellerToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Register seller
export const registerSeller = async (sellerData) => {
  const response = await axios.post(`${API_URL}/seller/register`, sellerData);
  return response.data;
};

// Login seller
export const loginSeller = async (credentials) => {
  const response = await axios.post(`${API_URL}/seller/login`, credentials);
  return response.data;
};

// Get seller profile
export const getSellerProfile = async () => {
  const response = await sellerAPI.get('/seller/auth/profile');
  return response.data;
};

// Update seller profile
export const updateSellerProfile = async (profileData) => {
  const response = await sellerAPI.put('/seller/auth/profile', profileData);
  return response.data;
};

// Logout seller
export const logoutSeller = () => {
  localStorage.removeItem('sellerToken');
  localStorage.removeItem('seller');
};

// Check if seller is authenticated
export const isSellerAuthenticated = () => {
  return !!localStorage.getItem('sellerToken');
};

// Get seller data from localStorage
export const getSellerData = () => {
  const seller = localStorage.getItem('seller');
  return seller ? JSON.parse(seller) : null;
};

export default sellerAPI;