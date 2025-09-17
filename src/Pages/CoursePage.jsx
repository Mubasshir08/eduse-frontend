import React from "react";
import CourseDetails from "../Components/CourseDetails";
import InstructorSection from "../Components/InstructorSection";
import ReviewsSection from "../Components/ReviewsSection";
import CartSection from "../Components/CartSection";
import RelatedTopics from "../Components/RelatedTopics";

const CoursePage = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Course Details Section */}
      <CourseDetails />

      {/* Instructor Info + Reviews */}
      <div className="max-w-6xl mx-auto px-6">
        <InstructorSection />
        <ReviewsSection />
      </div>

      {/* Cart + Related Topics */}
      <div className="max-w-4xl mx-auto px-6 my-10">
        <CartSection />
        <RelatedTopics />
      </div>
    </div>
  );
};

export default CoursePage;
