import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const CourseCard = ({ course }) => {
  const [imgSrc, setImgSrc] = useState(
    course.img
      ? course.img.startsWith("http")
        ? course.img
        : `${import.meta.env.VITE_API_BASE_URL.replace("/api", "")}${course.img}`
      : "/placeholder.png"
  );

  return (
    <div className="w-3/4">
      <img
        src={imgSrc}
        alt={course.title}
        className="w-full h-48 object-cover"
        onError={() => setImgSrc("/placeholder.png")}
      />
      <div className="py-4">
        <h1 className="text-gray-800">{course.title}</h1>
        <p className="text-gray-500">{course.authorName}</p>
        <div className="flex items-center gap-1">
          <FaStar color="#fbbf24" />
          <p className="text-gray-500">{course.rating || 0}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-gray-800 font-semibold">BDT {course.price}</p>
          <p className="text-gray-500 line-through">BDT {course.originalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
