import API from "./api";

// Get seller dashboard stats
export const getSellerStats = async () => {
  const response = await API.get('/seller/stats');
  return response.data;
};

// Get seller courses
export const getSellerCourses = async () => {
  const response = await API.get('/courses');
  return response.data;
};

// Get seller products
export const getSellerProducts = async () => {
  const response = await API.get('/products');
  return response.data;
};

// Get single course
export const getCourse = async (courseId) => {
  const response = await API.get(`/courses/${courseId}`);
  return response.data;
};

// Get single product
export const getProduct = async (productId) => {
  const response = await API.get(`/products/${productId}`);
  return response.data;
};

// Create course
export const createCourse = async (formData) => {
  const token = localStorage.getItem('sellerToken'); // retrieve the token

  const response = await API.post('/courses', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`, // send the token
    },
  });
  return response.data;
};


// Create product
export const createProduct = async (formData) => {
  const token = localStorage.getItem('sellerToken');
  const response = await API.post('/products', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`,
    },
  });
  return response.data;
};

// Update course
export const updateCourse = async (courseId, formData) => {
  const response = await API.put(`/courses/${courseId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

// Update product
export const updateProduct = async (productId, formData) => {
  const response = await API.put(`/products/${productId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

// Delete course
export const deleteCourse = async (courseId) => {
  const response = await API.delete(`/courses/${courseId}`);
  return response.data;
};

// Delete product
export const deleteProduct = async (productId) => {
  const response = await API.delete(`/products/${productId}`);
  return response.data;
};

// Enroll in course
export const enrollInCourse = async (courseId) => {
  const response = await API.post(`/courses/${courseId}/enroll`);
  return response.data;
};

// Search courses
export const searchCourses = async (params) => {
  const { category, level, minPrice, maxPrice, search } = params;
  const queryParams = new URLSearchParams();
  
  if (category) queryParams.append('category', category);
  if (level) queryParams.append('level', level);
  if (minPrice) queryParams.append('minPrice', minPrice);
  if (maxPrice) queryParams.append('maxPrice', maxPrice);
  if (search) queryParams.append('search', search);
  
  const response = await API.get(`/courses?${queryParams.toString()}`);
  return response.data;
};

// Search products
export const searchProducts = async (params) => {
  const { category, minPrice, maxPrice, search } = params;
  const queryParams = new URLSearchParams();
  
  if (category) queryParams.append('category', category);
  if (minPrice) queryParams.append('minPrice', minPrice);
  if (maxPrice) queryParams.append('maxPrice', maxPrice);
  if (search) queryParams.append('search', search);
  
  const response = await API.get(`/products?${queryParams.toString()}`);
  return response.data;
};