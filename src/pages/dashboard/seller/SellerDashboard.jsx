import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaBook,
  FaShoppingBag,
  FaPlus,
  FaTrash,
  FaImage,
} from 'react-icons/fa';
import {
  getSellerCourses,
  getSellerProducts,
  createCourse,
  createProduct,
  deleteCourse,
  deleteProduct,
} from '../../../api/seller';
import Navbar from '../../../shared/Navbar';

const SellerDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [showPostModal, setShowPostModal] = useState(false);
  const [postType, setPostType] = useState('course');
  const [courses, setCourses] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imagePreview, setImagePreview] = useState(null);

  // Form data
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    authorName: '',
    description: '',
    price: '',
    originalPrice: '',
    category: '',
    image: null,
  });

  // Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem('sellerToken');
    if (!token) {
      alert('Please login to continue');
      navigate('/seller-login');
    }
  }, [navigate]);

  // Load initial data
  useEffect(() => {
    loadCourses();
    loadProducts();
  }, []);

  const loadCourses = async () => {
    try {
      setLoading(true);
      const data = await getSellerCourses();
      setCourses(data.data || []);
      setLoading(false);
    } catch (error) {
      console.error('Error loading courses:', error);
      setLoading(false);
    }
  };

  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await getSellerProducts();
      setProducts(data.data || []);
      setLoading(false);
    } catch (error) {
      console.error('Error loading products:', error);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();

      if (postType === 'course') {
        formDataToSend.append('title', formData.title);
        formDataToSend.append('name', formData.title); // Use title as name too
        formDataToSend.append('authorName', formData.authorName);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('price', formData.price);
        formDataToSend.append('originalPrice', formData.originalPrice || formData.price);
        formDataToSend.append('category', formData.category);
        if (formData.image) {
          formDataToSend.append('image', formData.image);
        }

        await createCourse(formDataToSend);
        alert('Course created successfully!');
        await loadCourses();
      } else {
        formDataToSend.append('title', formData.name); // Use name as title too
        formDataToSend.append('name', formData.name);
        formDataToSend.append('authorName', formData.authorName);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('price', formData.price);
        formDataToSend.append('originalPrice', formData.price);
        formDataToSend.append('category', formData.category);
        if (formData.image) {
          formDataToSend.append('image', formData.image);
        }

        await createProduct(formDataToSend);
        alert('Product created successfully!');
        await loadProducts();
      }

      setShowPostModal(false);
      resetForm();
      setLoading(false);
    } catch (error) {
      alert(error.response?.data?.message || 'Error creating post');
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      name: '',
      authorName: '',
      description: '',
      price: '',
      originalPrice: '',
      category: '',
      image: null,
    });
    setImagePreview(null);
  };

  const handleDeleteCourse = async (courseId) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      try {
        await deleteCourse(courseId);
        alert('Course deleted successfully');
        await loadCourses();
      } catch (error) {
        alert(error.response?.data?.message || 'Error deleting course');
      }
    }
  };

  const handleDeleteProduct = async (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(productId);
        alert('Product deleted successfully');
        await loadProducts();
      } catch (error) {
        alert(error.response?.data?.message || 'Error deleting product');
      }
    }
  };

  // Calculate stats from loaded data
  const stats = {
    totalPosts: courses.length + products.length,
    totalCourses: courses.length,
    totalProducts: products.length,
  };

  if (loading && courses.length === 0 && products.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* <Navbar /> */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Seller Dashboard</h1>
            <p className="text-gray-600">Manage your courses and products</p>
          </div>
          <button
            onClick={() => {
              setShowPostModal(true);
              setPostType('course');
              resetForm();
            }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
          >
            <FaPlus /> Create New Post
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Posts</p>
                <p className="text-3xl font-bold text-gray-800">{stats.totalPosts}</p>
              </div>
              <FaPlus className="text-4xl text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Courses</p>
                <p className="text-3xl font-bold text-gray-800">{stats.totalCourses}</p>
              </div>
              <FaBook className="text-4xl text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Products</p>
                <p className="text-3xl font-bold text-gray-800">{stats.totalProducts}</p>
              </div>
              <FaShoppingBag className="text-4xl text-purple-500" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="border-b">
            <div className="flex">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-3 font-medium ${
                  activeTab === 'overview'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('courses')}
                className={`px-6 py-3 font-medium ${
                  activeTab === 'courses'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                My Courses ({courses.length})
              </button>
              <button
                onClick={() => setActiveTab('products')}
                className={`px-6 py-3 font-medium ${
                  activeTab === 'products'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                My Products ({products.length})
              </button>
            </div>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Welcome to your Dashboard</h2>
                <p className="text-gray-600 mb-4">
                  Create and manage your courses and products. Click "Create New Post" to get started!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 cursor-pointer transition"
                    onClick={() => {
                      setShowPostModal(true);
                      setPostType('course');
                      resetForm();
                    }}
                  >
                    <FaBook className="text-5xl text-blue-500 mx-auto mb-3" />
                    <h3 className="font-semibold text-lg mb-2">Create Course</h3>
                    <p className="text-gray-600 text-sm">Share your knowledge with students</p>
                  </div>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-500 cursor-pointer transition"
                    onClick={() => {
                      setShowPostModal(true);
                      setPostType('product');
                      resetForm();
                    }}
                  >
                    <FaShoppingBag className="text-5xl text-purple-500 mx-auto mb-3" />
                    <h3 className="font-semibold text-lg mb-2">Create Product</h3>
                    <p className="text-gray-600 text-sm">Sell your products online</p>
                  </div>
                </div>
              </div>
            )}

            {/* Courses Tab */}
            {activeTab === 'courses' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">My Courses</h2>
                {courses.length === 0 ? (
                  <div className="text-center py-12">
                    <FaBook className="text-6xl text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 mb-4">No courses yet. Create your first course!</p>
                    <button
                      onClick={() => {
                        setShowPostModal(true);
                        setPostType('course');
                        resetForm();
                      }}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                    >
                      Create Course
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course) => (
                      <div key={course._id} className="border rounded-lg p-4 hover:shadow-lg transition">
                        {course.image && (
                          <img
                            src={`${import.meta.env.VITE_API_BASE_URL.replace('/api', '')}${course.image}`}
                            alt={course.title}
                            className="w-full h-48 object-cover rounded-md mb-3"
                          />
                        )}
                        <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                        <p className="text-xs text-gray-500 mb-2">by {course.authorName}</p>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{course.description}</p>
                        <div className="flex items-center gap-2 mb-2">
                          <p className="text-blue-600 font-bold">{course.price} BDT</p>
                          {course.originalPrice && course.originalPrice !== course.price && (
                            <p className="text-gray-400 line-through text-sm">{course.originalPrice} BDT</p>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mb-3">Category: {course.category}</p>
                        <button
                          onClick={() => handleDeleteCourse(course._id)}
                          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 flex items-center justify-center gap-2"
                        >
                          <FaTrash /> Delete
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Products Tab */}
            {activeTab === 'products' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">My Products</h2>
                {products.length === 0 ? (
                  <div className="text-center py-12">
                    <FaShoppingBag className="text-6xl text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 mb-4">No products yet. Create your first product!</p>
                    <button
                      onClick={() => {
                        setShowPostModal(true);
                        setPostType('product');
                        resetForm();
                      }}
                      className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
                    >
                      Create Product
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                      <div key={product._id} className="border rounded-lg p-4 hover:shadow-lg transition">
                        {product.image && (
                          <img
                            src={`${import.meta.env.VITE_API_BASE_URL.replace('/api', '')}${product.image}`}
                            alt={product.name}
                            className="w-full h-48 object-cover rounded-md mb-3"
                          />
                        )}
                        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                        <p className="text-xs text-gray-500 mb-2">by {product.authorName}</p>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                        <p className="text-blue-600 font-bold mb-2">{product.price} BDT</p>
                        <p className="text-xs text-gray-500 mb-3">Category: {product.category}</p>
                        <button
                          onClick={() => handleDeleteProduct(product._id)}
                          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 flex items-center justify-center gap-2"
                        >
                          <FaTrash /> Delete
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Create Post Modal */}
      {showPostModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6">Create New Post</h2>

              {/* Post Type Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Post Type *</label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setPostType('course')}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 ${
                      postType === 'course'
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-300'
                    }`}
                  >
                    <FaBook className="inline mr-2" />
                    Course
                  </button>
                  <button
                    onClick={() => setPostType('product')}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 ${
                      postType === 'product'
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-300'
                    }`}
                  >
                    <FaShoppingBag className="inline mr-2" />
                    Product
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Title/Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {postType === 'course' ? 'Course Title' : 'Product Name'} *
                  </label>
                  <input
                    type="text"
                    name={postType === 'course' ? 'title' : 'name'}
                    value={postType === 'course' ? formData.title : formData.name}
                    onChange={handleInputChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
                    placeholder={postType === 'course' ? 'e.g., Design Thinking & UX Fundamentals' : 'e.g., Programming Books Set'}
                    required
                  />
                </div>

                {/* Author Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {postType === 'course' ? 'Instructor Name' : 'Seller Name'} *
                  </label>
                  <input
                    type="text"
                    name="authorName"
                    value={formData.authorName}
                    onChange={handleInputChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
                    placeholder={postType === 'course' ? 'e.g., Salauddin, UX Studio' : 'e.g., Tech Books Store'}
                    required
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium mb-2">Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
                    placeholder="Describe your course or product..."
                    required
                  ></textarea>
                </div>

                {/* Price */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Price (BDT) *</label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
                      placeholder="2000"
                      min="0"
                      step="0.01"
                      required
                    />
                  </div>

                  {postType === 'course' && (
                    <div>
                      <label className="block text-sm font-medium mb-2">Original Price (BDT)</label>
                      <input
                        type="number"
                        name="originalPrice"
                        value={formData.originalPrice}
                        onChange={handleInputChange}
                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
                        placeholder="2500"
                        min="0"
                        step="0.01"
                      />
                    </div>
                  )}
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium mb-2">Category *</label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
                    placeholder={postType === 'course' ? 'e.g., Design, Programming, Business' : 'e.g., Books, Electronics, Clothing'}
                    required
                  />
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {postType === 'course' ? 'Course Image' : 'Product Image'} *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                      id="imageUpload"
                      required={!imagePreview}
                    />
                    <label htmlFor="imageUpload" className="cursor-pointer">
                      {imagePreview ? (
                        <div>
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="max-h-48 mx-auto mb-2 rounded"
                          />
                          <p className="text-sm text-blue-600">Click to change image</p>
                        </div>
                      ) : (
                        <div>
                          <FaImage className="mx-auto text-4xl text-gray-400 mb-2" />
                          <p className="text-gray-600">Click to upload image</p>
                          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowPostModal(false);
                      resetForm();
                    }}
                    className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
                  >
                    {loading ? 'Creating...' : 'Create Post'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerDashboard;