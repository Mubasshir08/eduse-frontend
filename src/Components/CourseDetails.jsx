import React from "react";

const CourseDetails = () => {
  return (
    <div className="bg-white border-b py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Design Thinking & UX Fundamentals
          </h1>
          <p className="text-gray-600 mb-4">
            Learn User-Centered Design | Solve Real-World Problems With Creative Thinking
          </p>

          <div className="flex items-center space-x-3 mb-4">
            <span className="bg-yellow-300 text-xs px-2 py-1 rounded">
              Bestseller
            </span>
            <span className="text-gray-700">⭐ 4.7 (10 ratings)</span>
            <span className="text-gray-500">20 Students</span>
          </div>

          <p className="text-sm text-gray-600 mb-2">Created By Sarah, UX Studio</p>
          <p className="text-sm text-gray-600 mb-2">Last Updated: June 2025 | English</p>
          <p className="text-sm text-gray-600 mb-6">🎓 Lifetime Access | 📜 Certificate Included</p>

          <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
            Buy Course
          </button>
        </div>

        {/* Right Image + Price */}
        <div className="text-center border p-6 rounded-lg shadow">
          <img
            src="/src/assets/design-thinking.png"
            alt="Course Thumbnail"
            className="mx-auto mb-4 w-72"
          />
          <p className="text-lg font-semibold mb-4">Price: 2000 BDT</p>
          <button className="bg-blue-600 text-white w-full py-2 rounded mb-2">
            Add To Cart
          </button>
          <button className="border w-full py-2 rounded">❤️ Save</button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
