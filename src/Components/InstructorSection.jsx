import React from "react";
import { FaStar, FaRegUser, FaBookOpen, FaRegCommentDots } from "react-icons/fa";
import instructorImg from "../assets/instructor.png"; 

const InstructorSection = () => {
  return (
    <section className="max-w-2xl  px-5 md:px-0 py-10 text-gray-800">
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-6">About The Instructor</h2>

      {/* Top Section */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
        
        {/* Right: Info */}
        <div>
          <h3 className="text-xl font-semibold text-blue-700">Sarah Malik</h3>
          <p className="text-sm text-gray-600 mb-3">
            UX Strategist | Former Designer At Google
          </p>

          {/* parent div */}
          <div className="flex gap-8">

            {/* Left: Image */}
        <div className="flex-shrink-0">
          <img
            src={instructorImg}
            alt="Instructor"
            className="w-28 h-28 rounded-full object-cover border border-gray-300"
          />
        </div>

           {/* Stats */}
          <div className="py-5 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              <span>4.5 Instructor Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRegCommentDots className="text-gray-500" />
              <span>10 Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRegUser className="text-gray-500" />
              <span>100 Students</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBookOpen className="text-gray-500" />
              <span>1 Course</span>
            </div>
          </div>

          </div>

        </div>
      </div>

      {/* Description */}
      <div className="text-[15px] leading-relaxed text-gray-700">
        <p className="mb-3">
          Hello, I’m Sarah, A UX Strategist And Former Designer At Google, With
          Over A Decade Of Experience Crafting Human-Centered Digital Products
          That Not Only Look Beautiful But Solve Real Problems. <br />Throughout My
          Career, I’ve Led Design Initiatives At Top-Tier Tech Companies,
          Mentored Hundreds Of Junior Designers, And Built UX Frameworks Used By
          Startups And Enterprises Alike. My Passion Lies In Simplifying Complex
          Design Systems And Helping Aspiring Designers Grow Into Confident,
          Job-Ready Professionals. <br />
          Over 60,000 Students Across The Globe Have Joined My Courses And
          Workshops Across Platforms. I’ve Earned A Consistent 4.9-Star Rating
          For Delivering Content That Is Clear, Practical, And Deeply Aligned
          With Industry Needs.
        </p>
        <p className="italic font-medium text-gray-900 mb-3">
          “I Believe Design Isn’t Just About Visuals – It’s About Solving
          Problems Creatively.”
        </p>

        <p>
          In This Course, I’ll Guide You Through Proven UX Strategies, Case
          Studies, Hands-On Projects, And The Thinking Patterns That Top Product
          Teams Use Every Day. Whether You’re A Complete Beginner Or Looking To
          Level Up Your UX Career, This Course Is Designed To Empower You With
          Clarity, Creativity, And Confidence. Let’s Make Design Impactful –
          Together.
        </p>
      </div>
    </section>
  );
};

export default InstructorSection;
