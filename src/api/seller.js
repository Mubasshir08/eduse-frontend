import API from "./api";

// Get seller dashboard stats
export const getSellerStats = async () => {
  const response = await API.get('/seller/stats');
  return response.data;
};

// Get seller courses
export const getSellerCourses = async (sellerId) => {
  const response = await API.get(`/courses/seller/${sellerId}`);
  return response.data;
};

// Get seller products
export const getSellerProducts = async (sellerId) => {
  const response = await API.get(`/products/seller/${sellerId}`);
  return response.data;
};

// Get single course (PUBLIC - matches backend /:id route)
export const getCourse = async (courseId) => {
  try {
    console.log('Fetching course with ID:', courseId);
    
    if (!courseId || courseId === 'undefined') {
      throw new Error('Invalid course ID');
    }
    
    const response = await API.get(`/courses/${courseId}`);
    console.log('API Response:', response.data);
    
    // Handle different response structures
    if (response.data.data) {
      return response.data.data;
    }
    if (response.data.course) {
      return response.data.course;
    }
    return response.data;
    
  } catch (error) {
    console.error('getCourse error:', error.response?.data || error.message);
    throw error;
  }
};

// Get single product (PUBLIC - matches backend /:id route)
export const getProduct = async (productId) => {
  try {
    console.log('Fetching product with ID:', productId);
    
    if (!productId || productId === 'undefined') {
      throw new Error('Invalid product ID');
    }
    
    const response = await API.get(`/products/${productId}`);
    console.log('API Response:', response.data);
    
    // Handle different response structures
    if (response.data.data) {
      return response.data.data;
    }
    if (response.data.product) {
      return response.data.product;
    }
    return response.data;
    
  } catch (error) {
    console.error('getProduct error:', error.response?.data || error.message);
    throw error;
  }
};

// Create course
export const createCourse = async (formData) => {
  const token = localStorage.getItem('sellerToken');
  const response = await API.post('/courses', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`,
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
  const token = localStorage.getItem('sellerToken');
  const response = await API.put(`/courses/${courseId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`,
    },
  });
  return response.data;
};

// Update product
export const updateProduct = async (productId, formData) => {
  const token = localStorage.getItem('sellerToken');
  const response = await API.put(`/products/${productId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`,
    },
  });
  return response.data;
};

// Delete course
export const deleteCourse = async (courseId) => {
  const token = localStorage.getItem('sellerToken');
  const response = await API.delete(`/courses/${courseId}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  return response.data;
};

// Delete product
export const deleteProduct = async (productId) => {
  const token = localStorage.getItem('sellerToken');
  const response = await API.delete(`/products/${productId}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
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