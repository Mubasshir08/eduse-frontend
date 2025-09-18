import React from "react";
import Navbar from "../shraed/Navbar";
import Left_section from "..//components/Left_section";
import Right_section from "../components/Right_section";
import ProductWithReview from "../components/Userfloat_revew";
import Userfloat_revew from "../components/Userfloat_revew";

const Cource_over_view = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto py-4 px-6 flex  justify-between gap-6">
        <Left_section />
        <Right_section />
      </div>
      <Userfloat_revew />
    </>
  );
};

export default Cource_over_view;
