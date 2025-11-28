import API from "./api";

// Get dashboard stats
export const getDashboardStats = async () => {
  const response = await API.get('/admin/stats');
  return response.data;
};

// Get all users
export const getAllUsers = async (page = 1, limit = 10) => {
  const response = await API.get(`/admin/users?page=${page}&limit=${limit}`);
  return response.data;
};

// Delete user
export const deleteUser = async (userId) => {
  const response = await API.delete(`/admin/users/${userId}`);
  return response.data;
};

// Get all courses
export const getAllCourses = async (page = 1, limit = 10) => {
  const response = await API.get(`/admin/courses?page=${page}&limit=${limit}`);
  return response.data;
};

// Delete course
export const deleteCourse = async (courseId) => {
  const response = await API.delete(`/admin/courses/${courseId}`);
  return response.data;
};

// Get all products
export const getAllProducts = async (page = 1, limit = 10) => {
  const response = await API.get(`/admin/products?page=${page}&limit=${limit}`);
  return response.data;
};

// Delete product
export const deleteProduct = async (productId) => {
  const response = await API.delete(`/admin/products/${productId}`);
  return response.data;
};