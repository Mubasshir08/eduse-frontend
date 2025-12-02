import React, { useEffect, useState } from "react";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import CourseCard from "../../components/e_learning_components/CourseCard";
import { Link } from "react-router-dom";
import axios from "axios";

const E_learning = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/courses");

      // response.data is { success, count, data }
      setCourses(response.data.data); // <- use .data here
    } catch (err) {
      console.error(err);
      setError("Failed to fetch courses. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  fetchCourses();
}, []);

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="text-center mt-20 text-xl">Loading courses...</div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Navbar />
        <div className="text-center mt-20 text-red-500">{error}</div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      {courses.length === 0 ? (
        <div className="text-center mt-20 text-xl">
          No courses available at the moment.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-20 mt-10">
          {courses.map((course) => {
            // Assuming the 'image' field contains the URL or relative path
            const imgUrl = course.image || null;

            return (
              <Link key={course._id} to={`/course-details/${course._id}`}>
                <CourseCard course={{ ...course, img: imgUrl }} />
              </Link>
            );
          })}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default E_learning;
