import React from "react";
import CourseDetails from "../Components/CourseDetails";
import InstructorSection from "../Components/InstructorSection";
import ReviewsSection from "../Components/ReviewsSection";
import CartSection from "../Components/CartSection";
import RelatedTopics from "../Components/RelatedTopics";
import CourseModules from "../Components/CourseModules"
import CourseModule from "../Components/CourseModule"
import Footer from "../components/shared/Footer";
import Navbar from "../Components/shared/Navbar";

const CoursePage = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />
      {/* Course Details Section */}
        <CourseDetails /> 
        <CourseModules/>
        <CourseModule/>
      {/* Instructor Info + Reviews */}
      <div className="max-w-6xl mx-auto px-6">
        <InstructorSection />
        <ReviewsSection />
      </div>

      {/* Cart + Related Topics
      <div className="max-w-7xl mx-auto px-6 my-10">
        <CartSection />
        <RelatedTopics /> */}
      {/* </div> */}
      <Footer />
    </div>
  );
};

export default CoursePage;
