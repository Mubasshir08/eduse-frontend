import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const Left_section = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!product) return null;

  // Ensure image URL is valid
  const imgSrc = product.image
    ? product.image.startsWith("http")
      ? product.image
      : `${import.meta.env.VITE_API_BASE_URL.replace("/api", "")}${product.image}`
    : "/placeholder.png";

  // Split description into bullet points
  const descriptionList = product.description
    ? product.description.split("\n").filter((line) => line.trim() !== "")
    : [];

  return (
    <section className="relative w-2/3 h-auto shadow-xl rounded-sm p-6 bg-white overflow-visible">
      {/* Product Image */}
      <img
        className="h-100 w-full object-cover rounded-md"
        src={imgSrc}
        alt={product.name || "Product"}
        onError={(e) => {
          e.target.src = "/placeholder.png"; // fallback image if broken
        }}
      />

      {/* Expand/Collapse Button */}
      <div className="mt-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center px-4 py-3 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-md"
        >
          <span className="text-[#999999]">Read</span>
          {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
        </button>
      </div>

      {/* Dynamic Description */}
      {isOpen && (
        <div className="absolute left-6 right-6 mt-2 bg-white shadow-lg rounded-md p-4 z-10">
          <h3 className="font-semibold mb-2">Product Details:</h3>
          {descriptionList.length > 0 ? (
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              {descriptionList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-700">{product.description}</p>
          )}
        </div>
      )}
    </section>
  );
};

export default Left_section;
