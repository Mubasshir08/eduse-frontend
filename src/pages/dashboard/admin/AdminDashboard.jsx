// src/pages/admin/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaUsers,
  FaBook,
  FaShoppingBag,
  FaTrash,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import {
  getDashboardStats,
  getAllUsers,
  getAllSellers,
  getAllCourses,
  deleteCourse,
  getAllProducts,
  deleteProduct,
  deleteUser,
} from '../../../api/admin';
import { adminLogout } from '../../../api/auth';
import Navbar from '../../../shared/Navbar';
import { LogOut } from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState(null);
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    pages: 1,
    total: 0,
  });

  // Check if user is admin
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      alert('Please login to continue');
      navigate('/admin/login');
      return;
    }
    
    const userData = JSON.parse(user);
    if (userData.role !== 'admin') {
      alert('Access denied. Admin only.');
      navigate('/');
    }
  }, [navigate]);

  // Load dashboard stats
  useEffect(() => {
    loadStats();
  }, []);

  // Load data based on active tab
  useEffect(() => {
    if (activeTab === 'users') loadUsers();
    if (activeTab === 'courses') loadCourses();
    if (activeTab === 'products') loadProducts();
  }, [activeTab, pagination.page]);

  const loadStats = async () => {
    try {
      const data = await getDashboardStats();
      setStats(data.stats);
      setLoading(false);
    } catch (error) {
      console.error('Error loading stats:', error);
      if (error.response?.status === 403 || error.response?.status === 401) {
        alert('Session expired or access denied. Please login again.');
        adminLogout();
      }
      setLoading(false);
    }
  };

  const loadUsers = async () => {
    try {
      setLoading(true);
      const data = await getAllUsers(pagination.page);
      setUsers(data.users);
      setPagination(data.pagination);
      setLoading(false);
    } catch (error) {
      console.error('Error loading users:', error);
      setLoading(false);
    }
  };

  const loadCourses = async () => {
    try {
      setLoading(true);
      const data = await getAllCourses(pagination.page);
      setCourses(data.courses);
      setPagination(data.pagination);
      setLoading(false);
    } catch (error) {
      console.error('Error loading courses:', error);
      setLoading(false);
    }
  };

  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await getAllProducts(pagination.page);
      setProducts(data.products);
      setPagination(data.pagination);
      setLoading(false);
    } catch (error) {
      console.error('Error loading products:', error);
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(userId);
        loadUsers();
        loadStats();
        alert('User deleted successfully');
      } catch (error) {
        alert(error.response?.data?.message || 'Error deleting user');
      }
    }
  };

  const handleDeleteCourse = async (courseId) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      try {
        await deleteCourse(courseId);
        loadCourses();
        loadStats();
        alert('Course deleted successfully');
      } catch (error) {
        alert(error.response?.data?.message || 'Error deleting course');
      }
    }
  };

  const handleDeleteProduct = async (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(productId);
        loadProducts();
        loadStats();
        alert('Product deleted successfully');
      } catch (error) {
        alert(error.response?.data?.message || 'Error deleting product');
      }
    }
  };

  const Pagination = () => (
    <div className="flex items-center justify-between mt-6">
      <p className="text-sm text-gray-600">
        Showing page {pagination.page} of {pagination.pages} ({pagination.total}{' '}
        total)
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => setPagination({ ...pagination, page: pagination.page - 1 })}
          disabled={pagination.page === 1}
          className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => setPagination({ ...pagination, page: pagination.page + 1 })}
          disabled={pagination.page === pagination.pages}
          className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );

  if (loading && !stats) {
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
        <div className='flex items-center justify-between'>
                <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
                <p className="text-gray-600">Manage users, courses, and products</p>
              </div>
              <LogOut className="-mt-7 hover:text-red-600 transition duration-300" onClick={adminLogout} />
        </div>

        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Total Users</p>
                  <p className="text-3xl font-bold text-gray-800">{stats.totalUsers}</p>
                </div>
                <FaUsers className="text-4xl text-blue-500" />
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
        )}

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="border-b">
            <div className="flex">
              <button
                onClick={() => {
                  setActiveTab('overview');
                  setPagination({ ...pagination, page: 1 });
                }}
                className={`px-6 py-3 font-medium ${
                  activeTab === 'overview'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => {
                  setActiveTab('users');
                  setPagination({ ...pagination, page: 1 });
                }}
                className={`px-6 py-3 font-medium ${
                  activeTab === 'users'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Users
              </button>
              <button
                onClick={() => {
                  setActiveTab('courses');
                  setPagination({ ...pagination, page: 1 });
                }}
                className={`px-6 py-3 font-medium ${
                  activeTab === 'courses'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Courses
              </button>
              <button
                onClick={() => {
                  setActiveTab('products');
                  setPagination({ ...pagination, page: 1 });
                }}
                className={`px-6 py-3 font-medium ${
                  activeTab === 'products'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Products
              </button>
            </div>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && stats && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Dashboard Overview</h2>
                <p className="text-gray-600">
                  Welcome to the admin dashboard. Use the tabs above to manage users,
                  courses, and products.
                </p>
              </div>
            )}

            {/* Users Tab */}
            {activeTab === 'users' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">All Users</h2>
                {loading ? (
                  <p>Loading...</p>
                ) : users.length === 0 ? (
                  <p className="text-gray-500">No users found</p>
                ) : (
                  <>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                              Name
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                              Email
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                              Role
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                              Joined
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {users.map((user) => (
                            <tr key={user._id} className="hover:bg-gray-50">
                              <td className="px-4 py-3">{user.name}</td>
                              <td className="px-4 py-3">{user.email}</td>
                              <td className="px-4 py-3">
                                <span
                                  className={`px-2 py-1 rounded text-xs ${
                                    user.role === 'admin'
                                      ? 'bg-purple-100 text-purple-800'
                                      : 'bg-gray-100 text-gray-800'
                                  }`}
                                >
                                  {user.role || 'user'}
                                </span>
                              </td>
                              <td className="px-4 py-3">
                                {new Date(user.createdAt).toLocaleDateString()}
                              </td>
                              <td className="px-4 py-3">
                                <button
                                  onClick={() => handleDeleteUser(user._id)}
                                  className="text-red-600 hover:text-red-800"
                                  disabled={user.role === 'admin'}
                                >
                                  {user.role === 'admin' ? '' : <FaTrash />}
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <Pagination />
                  </>
                )}
              </div>
            )}

            {/* Courses Tab */}
            {activeTab === 'courses' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">All Courses</h2>
                {loading ? (
                  <p>Loading...</p>
                ) : courses.length === 0 ? (
                  <p className="text-gray-500">No courses found</p>
                ) : (
                  <>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                              Title
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                              Author
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                              Price
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                              Created
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {courses.map((course) => (
                            <tr key={course._id} className="hover:bg-gray-50">
                              <td className="px-4 py-3">{course.title}</td>
                              <td className="px-4 py-3">
                                {course.authorName || 'N/A'}
                              </td>
                              <td className="px-4 py-3">{course.price} BDT</td>
                              <td className="px-4 py-3">
                                {new Date(course.createdAt).toLocaleDateString()}
                              </td>
                              <td className="px-4 py-3">
                                <button
                                  onClick={() => handleDeleteCourse(course._id)}
                                  className="text-red-600 hover:text-red-800"
                                >
                                  <FaTrash />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <Pagination />
                  </>
                )}
              </div>
            )}

            {/* Products Tab */}
            {activeTab === 'products' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">All Products</h2>
                {loading ? (
                  <p>Loading...</p>
                ) : products.length === 0 ? (
                  <p className="text-gray-500">No products found</p>
                ) : (
                  <>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                              Name
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                              Seller
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                              Price
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                              Created
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {products.map((product) => (
                            <tr key={product._id} className="hover:bg-gray-50">
                              <td className="px-4 py-3">{product.name}</td>
                              <td className="px-4 py-3">
                                {product.authorName || 'N/A'}
                              </td>
                              <td className="px-4 py-3">{product.price} BDT</td>
                              <td className="px-4 py-3">
                                {new Date(product.createdAt).toLocaleDateString()}
                              </td>
                              <td className="px-4 py-3">
                                <button
                                  onClick={() => handleDeleteProduct(product._id)}
                                  className="text-red-600 hover:text-red-800"
                                >
                                  <FaTrash />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <Pagination />
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;