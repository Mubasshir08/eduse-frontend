import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const Left_section = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="relative w-95 h-135 shadow-xl rounded-sm p-6 bg-white overflow-visible">
      {/* Image Section */}
      <div>
        <img
          className="h-100 w-full object-cover rounded-md"
          src="src/assets/images/img1.jpg"
          alt="img"
        />
      </div>

      {/* Dropdown Button */}
      <div className="mt-4">
        <button
          onClick={toggleDropdown}
          className="w-full flex justify-between items-center px-4 py-3 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-md"
        >
          <span className="text-[#999999]">Read</span>
          {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
        </button>
      </div>

      {/* Floating Dropdown Content */}
      {isOpen && (
        <div className="absolute left-6 right-6 mt-2 bg-white shadow-lg rounded-md p-4 z-10">
          <h3 className="font-semibold mb-2">What's Inside the Book:</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            <li>History and Importance of C Programming</li>
            <li>Variables, Data Types, and Operators</li>
            <li>Conditional Logic (if, else, switch)</li>
            <li>Loops (for, while, do-while)</li>
            <li>Functions, Arrays, and Strings</li>
            <li>Introduction to Pointers and Memory</li>
            <li>File Handling Basics with Hands-on Examples</li>
            <li>Bonus: Viva & Interview Questions</li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Left_section;
