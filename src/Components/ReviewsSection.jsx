import React from "react";
import { FaStar, FaEllipsisV, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

const ReviewsSection = () => {
  return (
    <div className="max-w-2xl p-6 font-inter">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-3 mb-6">
        <div className="flex items-center space-x-2 text-gray-800">
          <FaStar className="text-yellow-400" />
          <span className="font-semibold text-lg">4.5 Course Rating</span>
          <span className="text-black font-semibold">• 4 Ratings</span>
        </div>
        <button className="text-blue-600 border border-blue-600 rounded-md px-3 py-1 text-sm font-medium hover:bg-blue-50">
          See All Review
        </button>
      </div>

      {/* Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Review 1 */}
        <div className="border rounded-lg p-4 relative">
          <div className="flex items-start space-x-3">
            <img
              src="/src/assets/images/avatar-1.png"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">
                    Eliash Rajin
                  </h3>
                  <div className="flex items-center text-xs text-gray-500 space-x-2">
                    <FaStar className="text-yellow-400 text-sm" />
                    <span>4.5</span>
                    <span>• 1 Week Ago</span>
                  </div>
                </div>
                <button className="text-gray-500 hover:text-gray-700">
                  <FaEllipsisV />
                </button>
              </div>

              <p className="text-gray-700 text-sm mt-3 leading-relaxed">
                “If You’re Starting In UX From Zero, This Course Will Help You
                Understand The Core Concepts.”
              </p>

              <div className="mt-3 text-xs text-gray-500 flex items-center space-x-4">
                <span>Helpful?</span>
                <FaRegThumbsUp className="cursor-pointer hover:text-blue-600" />
                <FaRegThumbsDown className="cursor-pointer hover:text-blue-600" />
              </div>
            </div>
          </div>

          {/* Static Report Abuse Popup */}
          <div className="absolute left-1/2 -translate-x-1/2 top-20 bg-white border shadow-md rounded-md p-4 w-80 z-20">
            <h4 className="font-semibold text-gray-800 text-sm mb-2">Report abuse</h4>
            <p className="text-xs text-gray-500 mb-3">
              Flagged content is reviewed by Eduse staff to determine whether it violates Terms of Service or Community Guidelines. If you have a question or technical issue, please contact our Support team here.
            </p>
            {/* <label className="text-xs text-gray-600">Problem type</label> */}
            {/* <select className="w-full border rounded-md text-sm mt-1 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option>Select an issue</option>
              <option>Inappropriate Course Content - Harmful, Violent</option>
              <option>Inappropriate Course Content - Other</option>
              <option>Inappropriate Behavior</option>
              <option>Eduse Policy Violation</option>
              <option>Spam or Misleading Promotion</option>
              <option>Other Concerns</option>
            </select> */}
          </div>
        </div>

        {/* Review 2 */}
        <div className="border rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <img
              src="/src/assets/images/avatar-2.png"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">
                    Meherun Nahar
                  </h3>
                  <div className="flex items-center text-xs text-gray-500 space-x-2">
                    <FaStar className="text-yellow-400 text-sm" />
                    <span>4.8</span>
                    <span>• 2 Days Ago</span>
                  </div>
                </div>
                <button className="text-gray-500 hover:text-gray-700">
                  <FaEllipsisV />
                </button>
              </div>

              <p className="text-gray-700 text-sm mt-3 leading-relaxed">
                “Loved The Hands-On Projects! The Instructor Made Complex Topics
                Feel So Approachable.”
              </p>
              <div className="text-xs text-gray-600 mt-2 flex flex-wrap gap-1">
                <span className="text-gray-600">
                  ✅ Practical |
                </span>
                <span className="text-gray-600">
                  Beginner-Friendly |
                </span>
                <span className="text-gray-600">
                  Motivating
                </span>
              </div>

              <div className="mt-3 text-xs text-gray-500 flex items-center space-x-4">
                <span>Helpful?</span>
                <FaRegThumbsUp className="cursor-pointer hover:text-blue-600" />
                <FaRegThumbsDown className="cursor-pointer hover:text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Review 3 */}
        <div className="border rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <img
              src="/src/assets/images/avatar-3.png"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">
                    Ritapa Saha
                  </h3>
                  <div className="flex items-center text-xs text-gray-500 space-x-2">
                    <FaStar className="text-yellow-400 text-sm" />
                    <span>4.7</span>
                    <span>• 1 Week Ago</span>
                  </div>
                </div>
                <button className="text-gray-500 hover:text-gray-700">
                  <FaEllipsisV />
                </button>
              </div>

              <p className="text-gray-700 text-sm mt-3 leading-relaxed">
                “I’ve Taken Many Online Courses, But This One Stood Out. The Case
                Study Module Alone Was Worth It.”
              </p>
              <div className="text-xs text-gray-600 mt-2 flex flex-wrap gap-1">
                <span className="text-gray-600">
                  Portfolio-Focused |
                </span>
                <span className="text-gray-600">
                  Engaging Content |
                </span>
                <span className="text-gray-600">
                  Highly Recommended
                </span>
              </div>

              <div className="mt-3 text-xs text-gray-500 flex items-center space-x-4">
                <span>Helpful?</span>
                <FaRegThumbsUp className="cursor-pointer hover:text-blue-600" />
                <FaRegThumbsDown className="cursor-pointer hover:text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Review 4 */}
         <div className="border rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <img
              src="/src/assets/images/avatar-4.png"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">
                    Ritapa Saha
                  </h3>
                  <div className="flex items-center text-xs text-gray-500 space-x-2">
                    <FaStar className="text-yellow-400 text-sm" />
                    <span>4.7</span>
                    <span>• 1 Week Ago</span>
                  </div>
                </div>
                <button className="text-gray-500 hover:text-gray-700">
                  <FaEllipsisV />
                </button>
              </div>

              <p className="text-gray-700 text-sm mt-3 leading-relaxed">
               “I’ve taken many online courses, but this one stood out. The case study module alone was worth it. You don’t just learn – you build.”
              </p>
              <div className="text-xs text-gray-600 mt-2 flex flex-wrap gap-1">
                <span className="text-gray-600">
                  Portfolio-Focused |
                </span>
                <span className="text-gray-600">
                  Engaging Content |
                </span>
                <span className="text-gray-600">
                  Highly Recommended
                </span>
              </div>

              <div className="mt-3 text-xs text-gray-500 flex items-center space-x-4">
                <span>Helpful?</span>
                <FaRegThumbsUp className="cursor-pointer hover:text-blue-600" />
                <FaRegThumbsDown className="cursor-pointer hover:text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="font-bold text-lg">More Courses By Sarah</p>
        <p className="my-2">Course unavailable</p>
      </div>
    </div>
  );
};

export default ReviewsSection;
