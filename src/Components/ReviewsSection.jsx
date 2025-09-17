import React from "react";

const ReviewsSection = () => {
  const reviews = [
    { name: "Eliash Rajin", rating: 4.6, text: "Great course! Very insightful." },
    { name: "Meherun Nahar", rating: 4.4, text: "Helpful, hands-on projects." },
    { name: "Ritapa Saha", rating: 4.7, text: "Very clear explanations." },
  ];

  return (
    <div className="my-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">
          ⭐ 4.5 Course Rating • 4 Ratings
        </h2>
        <button className="text-blue-600 text-sm font-medium">
          See All Review
        </button>
      </div>

      <div className="space-y-4">
        {reviews.map((r, i) => (
          <div key={i} className="border p-4 rounded-md shadow-sm">
            <p className="font-semibold">{r.name} ⭐ {r.rating}</p>
            <p className="text-sm text-gray-600 mt-1">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
