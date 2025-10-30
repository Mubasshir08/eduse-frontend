import React from "react";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { TbWorld } from "react-icons/tb";
import { IoCheckmarkOutline } from "react-icons/io5";

const CourseDetails = () => {
  const learnPoints = [
    "Master The 5 Stages Of Design Thinking (Empathize → Define → Ideate → Prototype → Test)",
    "Conduct User Interviews & Create Empathy Maps Like A Pro",
    "Define User Personas And Pain Points With Clarity",
    "Generate Innovative Solutions Using Brainstorming Frameworks",
    "Build Wireframes & Clickable Prototypes (Figma/Adobe XD)",
    "Validate Ideas Through Usability Testing & Feedback",
    "Develop Real-World UX Case Studies For Your Portfolio",
  ];

  return (
    <section className="bg-white border-b py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        
        {/* Left Section */}
        <div>
          <h1 className="text-3xl font-bold text-blue-600 mb-3">
            Design Thinking & UX Fundamentals
          </h1>
          <p className="text-gray-600 mb-4">
            Learn User-Centered Design | Solve Real-World Problems With Creative Thinking | Build UX Case Studies From Scratch
          </p>

          <div className="flex items-center space-x-3 mb-4">
            <span className="bg-blue-200 text-xs px-2 py-1 rounded font-medium">
              Bestseller
            </span>
            <span className="text-gray-700">⭐ 4.7 (10 ratings)</span>
            <span className="text-gray-500">20 Students</span>
          </div>

          <p className="text-sm text-gray-600 mb-2">Created By Sarah, UX Studio</p>
          <p className="text-sm text-gray-600 mb-2 flex gap-2"> <HiOutlineCalendarDateRange/> Last Updated: June 2025 <TbWorld />English</p>

          <p className="text-sm text-gray-600 mb-6 flex gap-2"><IoCheckmarkOutline className="border-1 bg-blue-500 text-white rounded-sm"/> Lifetime Access     |<IoCheckmarkOutline className="border-1 bg-blue-500 text-white rounded-sm" /> Certificate Included</p>

          <button className="bg-blue-600 text-white px-5 py-2 mb-4 rounded hover:bg-blue-700">
            Buy Course
          </button>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex border-2 rounded-md px-6 py-4 text-xs">
              <p className="text-gray-600">Duration: </p>
              <p className="text-gray-600">20 Hours</p>
            </div>

            <div className="flex border-2 rounded-md px-8 py-4 text-xs">
              <p className="text-gray-600">Total Modules: </p>
              <p className="text-gray-600">6</p>
            </div>

            <div className="flex border-2 rounded-md px-2 py-4  text-xs">
              <p className="text-gray-600">Total Video Lectures: </p>
              <p className="text-gray-600">38</p>
            </div>
          </div>

          {/* What You'll Learn */}
          <div className="border-2 pt-5 px-5 rounded-lg">
            <h2 className="text-lg font-semibold mb-3">What You’ll Learn</h2>
          <ul className="space-y-2 mb-6">
            {learnPoints.map((point, i) => (
              <li key={i} className="flex items-start space-x-2">
                <span className="text-gray-600 font-bold">✔</span>
                <p className="text-sm text-gray-700">{point}</p>
              </li>
            ))}
          </ul>
          </div>

        </div>

        {/* Right Section */}
        <div className="border rounded-lg shadow-md p-6 flex flex-col items-center">
          <img
            src="/src/assets/images/design-thinking.png"
            alt="Course Thumbnail"
            className="rounded-md max-w-sm"
          />
          <p className="text-gray-700 text-sm mb-2 text-center">
            Get This Course, Plus 20+ Of Our Top-Rated Courses
          </p>
          <p className="text-xl font-bold text-gray-900 mb-4">Price : 2000 BDT</p>

          <div className="flex items-center w-full gap-2 mb-3">
            <button className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
              Add To Cart
            </button>
            <button className="border px-4 py-2 rounded-md hover:bg-gray-100">
              ❤️
            </button>
          </div>

          <button className="w-full border py-2 rounded-md hover:bg-gray-100">
            Buy Course
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
