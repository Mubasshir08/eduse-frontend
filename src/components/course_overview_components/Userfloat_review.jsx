import React, { useState } from "react";
import { AiOutlineClose, AiFillStar } from "react-icons/ai";

export default function ReviewModal({ onClose }) {
  const [rating, setRating] = useState(0);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-xl shadow-lg w-[400px] p-4 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <AiOutlineClose size={22} />
        </button>

        <div className="flex items-start gap-3">
          <img
            src="/src/assets/images/img1.jpg"
            alt="product"
            className="w-16 h-20 object-cover rounded"
          />
          <div>
            <h2 className="font-semibold text-gray-800">
              Computer Programming in C for Beginners
            </h2>
            <p className="text-gray-600">Price: 350 BDT</p>
          </div>
        </div>

        <div className="mt-5 text-center">
          <p className="font-medium text-gray-700">Rate this product</p>
          <div className="flex justify-center mt-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <AiFillStar
                key={star}
                size={28}
                onClick={() => setRating(star)}
                className={`cursor-pointer ${
                  star <= rating ? "text-yellow-500" : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <textarea
          placeholder="Describe your experience (optional)"
          className="w-full mt-4 border rounded-lg p-2 text-sm focus:outline-blue-500"
          rows="3"
        ></textarea>

        <div className="mt-3">
          <label className="flex items-center justify-center border rounded-lg p-2 text-sm text-gray-500 cursor-pointer">
            <input type="file" className="hidden" />
            Upload Photo
          </label>
        </div>

        <div className="mt-5 flex justify-between">
          <button
            onClick={onClose}
            className="px-4 w-40 py-2 border rounded-sm text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button className="px-6 w-40 py-2 bg-blue-600 text-white rounded-sm shadow hover:bg-blue-700">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
