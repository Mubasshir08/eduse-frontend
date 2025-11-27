import React, { useState } from "react";

const Support = () => {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Support request submitted!");
    setSubject("");
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Page Title */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-6">
          Support
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Subject
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter subject here"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write description here"
              rows="5"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all"
          >
            Update Profile
          </button>
        </form>
      </div>

      {/* Support Request Section */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow-sm">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h3 className="text-lg font-semibold text-gray-700">
            Support Request
          </h3>
          <div className="space-x-4 text-sm text-gray-500">
            <button className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
              All
            </button>
            <button className="hover:text-blue-600">Pending</button>
            <button className="hover:text-blue-600">On Review</button>
            <button className="hover:text-blue-600">Complete</button>
          </div>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-10 text-gray-400">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7486/7486740.png"
            alt="No Data"
            className="w-24 h-24 mb-4 opacity-70"
          />
          <p>No Data Available in this Section</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
