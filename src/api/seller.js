import API from "./api";

// Get seller dashboard stats
export const getSellerStats = async () => {
  const response = await API.get('/seller/stats');
  return response.data;
};

// Get seller courses
export const getSellerCourses = async () => {
  const response = await API.get('/seller/courses');
  return response.data;
};

// Get seller products
export const getSellerProducts = async () => {
  const response = await API.get('/seller/products');
  return response.data;
};

// Create course
export const createCourse = async (formData) => {
  const response = await API.post('/seller/courses', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

// Create product
export const createProduct = async (formData) => {
  const response = await API.post('/seller/products', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

// Delete course
export const deleteCourse = async (courseId) => {
  const response = await API.delete(`/seller/courses/${courseId}`);
  return response.data;
};

// Delete product
export const deleteProduct = async (productId) => {
  const response = await API.delete(`/seller/products/${productId}`);
  return response.data;
};