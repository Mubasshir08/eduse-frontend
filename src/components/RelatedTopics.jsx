import React from "react";
import { FaClock, FaArrowRight } from "react-icons/fa";
import Navbar from "../shared/Navbar";

const RelatedTopics = () => {
  return (
    <div className="min-h-screen bg-white font-inter flex flex-col justify-between">
      {/* Main Section */}
      <div className="max-w-6xl mx-auto w-full px-6 mt-8">
        {/* Header */}
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-14">
          Shopping Cart
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Left: Cart Items */}
          <div className="md:col-span-3 space-y-5">
            {/* Cart Item 1 */}
            <div className="flex items-start border-b pb-4">
              <input type="checkbox" checked readOnly className="accent-blue-600 mt-2" />
              <img
                src="/src/assets/design-thinking.png"
                alt="Design Thinking"
                className="w-24 h-20 rounded-md ml-4 object-cover"
              />
              <div className="ml-4 flex-1">
                <h3 className="font-semibold text-blue-700 text-sm">
                  Design Thinking & UX Fundamentals
                </h3>
                <p className="text-xs text-gray-600 mt-1">
                  Created By <span className="font-medium">Sarah, UX Studio</span>
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="bg-blue-300 text-gray-600 text-[11px] font-semibold px-2 py-0.5 rounded">
                    Bestseller
                  </span>
                  <span className="text-sm text-gray-700">⭐ 4.7 (10 ratings)</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-blue-600">Remove</p>
                <p className="text-sm text-gray-600 mt-1">
                  Save For Later
                </p>
                <p className="text-sm font-medium text-gray-800 mt-2">Price : 2000 BDT</p>
              </div>
            </div>

            {/* Cart Item 2 */}
            <div className="flex items-start border-b pb-4">
              <input type="checkbox" checked readOnly className="accent-blue-600 mt-2" />
              <img
                src="/src/assets/figma-course.png"
                alt="Figma Course"
                className="w-24 h-20 rounded-md ml-4 object-cover"
              />
              <div className="ml-4 flex-1">
                <h3 className="font-semibold text-blue-700 text-sm">
                  UI Design With Figma Complete Guide
                </h3>
                <p className="text-xs text-gray-600 mt-1">
                  Created By <span className="font-medium">Sumaiya Jaman</span>
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-sm text-gray-700">⭐ 4.4 (5 ratings)</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-blue-600">Remove</p>
                <p className="text-sm text-gray-600 mt-1 ">
                  Save For Later
                </p>
                <p className="text-sm font-medium text-gray-800 mt-2">Price : 1500 BDT</p>
              </div>
            </div>
          </div>

          {/* Right: Total Section */}
          <div className="md:col-span-1 border-l md:pl-6 pt-2">
            <div className="flex flex-col items-start md:items-end">
              <p className="font-semibold text-gray-800 text-base">
                Total:- <span className="text-lg">3500 BDT</span>
              </p>
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-md flex items-center space-x-2">
                <span>Proceed To Checkout</span>
                <FaArrowRight className="text-xs" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar at the bottom */}
      <div className="mt-6 mb-40">
        <Navbar />
      </div>
    </div>
  );
};

export default RelatedTopics;
