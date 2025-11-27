import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import Left_section from "../../components/course_overview_components/Left_section";
import Right_section from "../../components/course_overview_components/Right_section";
import ReviewModal from "../../components/course_overview_components/Userfloat_review";
import FakeData from "../../assets/data/fakedata.json";

const Course_overview = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [images, setImages] = useState({});

  useEffect(() => {
    // Find course by ID
    const selectedCourse = FakeData.coursesData.find(
      (product) => product.id === parseInt(id)
    );
    setCourse(selectedCourse);

    // Dynamically import all images in the folder
    const importedImages = import.meta.glob(
      "../../assets/images/course_Images/*",
      { eager: true, query: "?url" }
    );

    // Build a map of relative path -> image URL
    const imageMap = {};
    for (const path in importedImages) {
      const filename = path.split("/").pop(); // e.g., course_Image-1.png
      const relativePath = `assets/images/course_Images/${filename}`;
      // ✅ .default is needed for Vite’s glob imports
      imageMap[relativePath] = importedImages[path].default;
    }

    setImages(imageMap);
  }, [id]);

  // console.log(course)

  if (!course) return <p>Loading...</p>;

  // Get the image URL from the map
  const courseImageUrl = images[course.img] || "";

  return (
    <>
      <Navbar />
      <div className="xl:items-start max-w-7xl mx-auto py-4 px-6 flex flex-col xl:flex-row justify-between gap-6">
        {/* ✅ pass resolved image URL */}
        <Left_section course={{ ...course, img: courseImageUrl }} />
        <Right_section course={course} />
      </div>
      <Footer />
    </>
  );
};

export default Course_overview;
