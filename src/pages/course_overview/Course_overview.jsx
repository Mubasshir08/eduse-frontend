import React, { useState } from "react";
import Navbar from "../../shared/Navbar";
import Left_section from "../../components/course_overview_components/Left_section";
import Right_section from "../../components/course_overview_components/Right_section";
import ReviewModal from "../../components/course_overview_components/Userfloat_review";
import Footer from "../../shared/Footer";

const Course_overview = () => {
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  return (
    <>
      <Navbar />
      <div className="xl:items-start max-w-7xl mx-auto py-4 px-6 flex flex-col xl:flex-row justify-between gap-6">
        <Left_section />
        <Right_section onReviewClick={() => setIsReviewOpen(true)} />
      </div>
      {isReviewOpen && <ReviewModal onClose={() => setIsReviewOpen(false)} />}
      <Footer />
    </>
  );
};

export default Course_overview;
