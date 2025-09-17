import React from "react";

const InstructorSection = () => {
  return (
    <div className="my-10">
      <h2 className="text-xl font-bold mb-4">About The Instructor</h2>
      <div className="flex items-start space-x-4">
        <img
          src="/src/assets/instructor.png"
          alt="Instructor"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-900">Sarah Malik</h3>
          <p className="text-sm text-gray-500">
            UX Strategist | Former Designer at Google
          </p>
          <ul className="text-sm text-gray-600 mt-2 space-y-1">
            <li>📌 40 Instructive Ratings</li>
            <li>📌 10 Reviews</li>
            <li>📌 3 Courses</li>
            <li>📌 1,000 Students</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
