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
    // find course by id
    const selectedCourse = FakeData.products.find(
      (product) => product.id === parseInt(id)
    );
    setCourse(selectedCourse);

    // import all images in the folder
    const importedImages = import.meta.glob(
      "../../assets/images/courseImages/*",
      { eager: true, as: "url" }
    );

    // create a map from relative path to URL
    const imageMap = {};
    for (const path in importedImages) {
      const parts = path.split("/"); 
      const relativePath = "assets/images/courseImages/" + parts.pop();
      imageMap[relativePath] = importedImages[path];
    }
    setImages(imageMap);
  }, [id]);

  if (!course) return <p>Loading...</p>;

  // get the Vite-resolved image URL
  const courseImageUrl = images[course.img];

  return (
    <>
      <Navbar />
      <div className="xl:items-start max-w-7xl mx-auto py-4 px-6 flex flex-col xl:flex-row justify-between gap-6">
        <Left_section course={{ ...course, img: courseImageUrl }} />
        <Right_section course={course} />
      </div>
      <Footer />
    </>
  );
};

export default Course_overview;
