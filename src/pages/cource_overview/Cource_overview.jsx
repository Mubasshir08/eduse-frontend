import React from "react";
import Navbar from "../../shared/Navbar";
import Left_section from "../../components/course_overview/Left_section";
import Right_section from "../../components/course_overview/Right_section";
// import ProductWithReview from "../../components/Userfloat_revew";
import Userfloat_revew from "../../components/course_overview/Userfloat_revew";
import Footer from "../../shared/Footer";

const Cource_over_view = () => {
  return (
    <>
      <Navbar />
      <div className=" xl:items-start max-w-7xl items-center flex-col xl:flex-row mx-auto py-4 px-6 flex  justify-between gap-6">
        <Left_section />
        <Right_section />
      </div>
      <Userfloat_revew />
      <Footer />
    </>
  );
};

export default Cource_over_view;
