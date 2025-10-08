// src/components/AddToCart.jsx
import React from "react";
import { FaClock } from "react-icons/fa";
import Navbar from "../Components/Navbar"; // adjust path if Navbar is in a different folder

const AddToCart = () => {
  return (
    <div className="min-h-screen font-inter">
      <div className="max-w-2xl mt-10 bg-white p-6 rounded-lg shadow-lg">
        {/* Header */}
        <h2 className="font-semibold text-lg text-gray-800 mb-4">Addes To Cart</h2>

        {/* Cart Items */}
        <div className="space-y-4">
          {/* Item 1 */}
          <div className="flex items-start border rounded-lg p-4">
            <input type="checkbox" checked readOnly className="accent-blue-600 mt-2" />
            <img
              src="/src/assets/design-thinking.png"
              alt="Design Thinking"
              className="w-24 h-20 rounded-md ml-4 object-cover"
            />
            <div className="ml-4 flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-blue-700 text-sm">
                  Design Thinking & UX Fundamentals
                </h3>
                <span className="text-gray-700 text-sm font-medium">Price : 2000 BDT</span>
              </div>

              <p className="text-xs text-gray-600 mt-1">
                Created By <span className="font-medium">Sarah, UX Studio</span>
              </p>

              {/* Tag + Ratings */}
              <div className="flex items-center space-x-2 mt-2">
                <span className="bg-blue-300 text-gray-600 text-[11px] font-semibold px-2 py-0.5 rounded">
                  Bestseller
                </span>
                <span className="text-sm text-gray-700">⭐ 4.7 (10 ratings)</span>
              </div>

              {/* Info */}
              <div className="text-xs text-gray-600 mt-2 flex items-center space-x-4">
                <span className="flex items-center space-x-1">
                  <FaClock className="text-gray-500" />
                  <span>Duration: 10 Hours</span>
                </span>
                <span>• Modules: 6</span>
                <span>• Lectures: 38</span>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start border rounded-lg p-4">
            <input type="checkbox" checked readOnly className="accent-blue-600 mt-2" />
            <img
              src="/src/assets/figma-course.png"
              alt="Figma Course"
              className="w-24 h-20 rounded-md ml-4 object-cover"
            />
            <div className="ml-4 flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-blue-700 text-sm">
                  UI Design With Figma Complete Guide
                </h3>
                <span className="text-gray-700 text-sm font-medium">Price : 1500 BDT</span>
              </div>

              <p className="text-xs text-gray-600 mt-1">
                Created By <span className="font-medium">Sumaiya Jaman</span>
              </p>

              {/* Ratings */}
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-sm text-gray-700">⭐ 4.4 (5 ratings)</span>
              </div>

              {/* Info */}
              <div className="text-xs text-gray-600 mt-2 flex items-center space-x-4">
                <span className="flex items-center space-x-1">
                  <FaClock className="text-gray-500" />
                  <span>Duration: 10 Hours</span>
                </span>
                <span>• Modules: 6</span>
                <span>• Lectures: 38</span>
              </div>
            </div>
          </div>
        </div>

        {/* Total Section */}
        <div className="border-t mt-6 pt-4 flex items-center justify-between">
          <p className="font-medium text-gray-700 text-sm">
            Total <span className="font-semibold text-lg ml-2">3500 BDT</span>
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-md">
            Check Cart
          </button>
        </div>

        {/* Related Topics */}
        <div className="mt-8">
          <h3 className="font-semibold text-gray-800 text-sm mb-3">Related Topics</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Design Thinking",
              "Web Accessibility",
              "Interaction Design",
              "Figma",
              "Prototyping",
              "Product Management",
            ].map((topic, index) => (
              <span
                key={index}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Space before bottom navbar */}
      <div className="h-10" />

      {/* Navbar at the end */}
      <div className="mt-8 mb-8">
        <Navbar />
      </div>
    </div>
  );
};

export default AddToCart;
