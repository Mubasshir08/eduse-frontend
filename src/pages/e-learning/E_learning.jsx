import React, { useEffect, useState } from "react";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import CourseCard from "../../components/e_learning_components/CourseCard";
import FakeData from "../../assets/data/fakedata.json";
import { Link } from "react-router-dom";

const E_learning = () => {
  const [courses, setCourses] = useState([]);
  const [images, setImages] = useState({});

  useEffect(() => {
    setCourses(FakeData.products);

    // Dynamically import all course images
    const importedImages = import.meta.glob(
      "../../assets/images/course_Images/*",
      { eager: true }
    );

    const imageMap = {};
    for (const path in importedImages) {
      const module = importedImages[path];
      const parts = path.split("/");
      const filename = parts.pop();
      const relativePath = `assets/images/course_Imagess/${filename}`;

      // Handle both string and object return types
      imageMap[relativePath] =
        typeof module === "string" ? module : module.default;
    }

    setImages(imageMap);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-20 mt-10">
        {courses.map((course) => {
          const imgUrl = images[course.img] || null;
          return (
            <Link key={course.id} to={`/course-details/${course.id}`}>
              <CourseCard course={{ ...course, img: imgUrl }} />
            </Link>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default E_learning;
