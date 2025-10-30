import React from "react";
import CourseDetails from "../components/CourseDetails";
import InstructorSection from "../components/InstructorSection";
import ReviewsSection from "../components/ReviewsSection";
import CartSection from "../components/CartSection";
import RelatedTopics from "../components/RelatedTopics";
import CourseModules from "../components/CourseModules"
import CourseModule from "../components/CourseModule"
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

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
