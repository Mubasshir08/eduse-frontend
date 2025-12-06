import React, { useEffect, useState } from "react";
import { getCourse } from "../../api/seller";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import Navbar from "../../shared/Navbar";
import { ShoppingCart, Clock, Users, BookOpen, PlayCircle, CheckCircle } from "lucide-react";

export default function Course_overview() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageError, setImageError] = useState(false);
  
  // Check if course is already in cart
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some(item => item.id === courseId);

  useEffect(() => {
    if (!courseId || courseId === 'undefined') {
      setError("Invalid course ID in URL");
      setLoading(false);
      return;
    }

    async function fetchData() {
      try {
        setLoading(true);
        const data = await getCourse(courseId);
        
        if (!data) {
          throw new Error('No course data returned from API');
        }
        
        setCourse(data);
        setError(null);
        setImageError(false);
      } catch (err) {
        console.error('Error:', err);
        setError(
          err.response?.data?.message || 
          err.message || 
          'Failed to load course details'
        );
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, [courseId]);

  // Get full image URL
  const getImageUrl = (imagePath) => {
    if (!imagePath) return null;
    if (imagePath.startsWith('http')) return imagePath;
    return `${import.meta.env.VITE_API_BASE_URL.replace("/api", "")}${imagePath}`;
  };

  // Handle enroll now
  const handleEnrollNow = () => {
    const courseData = {
      id: course._id,
      name: course.title || course.name,
      price: course.price,
      image: getImageUrl(course.image),
      category: course.category,
      level: course.level,
      type: 'course', // to differentiate from products
      isCourse: true,
      instructor: course.authorName || course.instructorName
    };

    dispatch(addToCart(courseData));
    
    // Optional: Show success message or navigate to cart
    navigate('/cart'); // or show a toast notification
  };

  // Handle add to cart (without navigation)
  const handleAddToCart = () => {
    const courseData = {
      id: course._id,
      name: course.title || course.name,
      price: course.price,
      image: getImageUrl(course.image),
      category: course.category,
      level: course.level,
      type: 'course',
      instructor: course.authorName || course.instructorName
    };

    dispatch(addToCart(courseData));
    
    // Optional: Show toast notification
    alert('Course added to cart!'); // Replace with toast library
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <div className="text-xl text-gray-600">Loading course details...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-md bg-white p-8 rounded-lg shadow-lg">
            <div className="text-xl text-red-500 mb-4 font-semibold">{error}</div>
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!course) return null;

  const imageUrl = getImageUrl(course.image);

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <Navbar />
      
      {/* Hero Section with Gradient */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              {course.category && (
                <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-4">
                  {course.category}
                </span>
              )}
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {course.title || course.name}
              </h1>
              <p className="text-lg text-white/90 mb-6">
                {course.shortDescription || course.description?.substring(0, 150)}
              </p>
              
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{course.enrolledStudents || 0} students</span>
                </div>
                {course.level && (
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    <span>{course.level}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-4">
                <div>
                  <span className="text-4xl font-bold">${course.price}</span>
                  {course.originalPrice && course.originalPrice !== course.price && (
                    <span className="text-xl text-white/60 line-through ml-3">
                      ${course.originalPrice}
                    </span>
                  )}
                </div>
                <button 
                  onClick={handleEnrollNow}
                  disabled={isInCart}
                  className={`flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-colors ${
                    isInCart 
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                      : 'bg-white text-blue-600 hover:bg-gray-100'
                  }`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  {isInCart ? 'Already in Cart' : 'Enroll Now'}
                </button>
              </div>
            </div>

            <div className="relative">
              {imageUrl && !imageError ? (
                <img
                  src={imageUrl}
                  alt={course.title || course.name}
                  className="w-full h-80 object-cover rounded-xl shadow-2xl"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-80 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <BookOpen className="w-24 h-24 text-white/50" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {course.learningOutcomes && course.learningOutcomes.length > 0 && (
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">What you'll learn</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.learningOutcomes.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {course.description && (
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Description</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {course.description}
                </p>
              </div>
            )}

            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Instructor</h2>
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                  {(course.authorName || course.instructorName || "?").charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {course.authorName || course.instructorName || "Unknown Instructor"}
                  </h3>
                  <p className="text-gray-600">Course Instructor</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Course Includes</h3>
              
              <div className="space-y-4 mb-6">
                {course.duration && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span>{course.duration}</span>
                  </div>
                )}
                
                <div className="flex items-center gap-3 text-gray-700">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span>{course.enrolledStudents || 0} students enrolled</span>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-gray-800">${course.price}</span>
                  {course.originalPrice && course.originalPrice !== course.price && (
                    <span className="text-lg text-gray-500 line-through ml-2">
                      ${course.originalPrice}
                    </span>
                  )}
                </div>
                
                <button 
                  onClick={handleEnrollNow}
                  disabled={isInCart}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors mb-3 ${
                    isInCart 
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isInCart ? 'Already in Cart' : 'Enroll Now'}
                </button>
                
                {!isInCart && (
                  <button 
                    onClick={handleAddToCart}
                    className="w-full py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition-colors"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}