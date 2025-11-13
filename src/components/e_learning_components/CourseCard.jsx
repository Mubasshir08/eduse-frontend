import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="w-3/4">
      <img src={course.img} alt={course.title} />
      <div className="py-4">
        <h1 className="text-gray-800">{course.title}</h1>
        <p className="text-gray-500">{course.author}</p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <img
            className="h-4"
            src="/src/assets/images/Star18.png" // fix slashes
            alt="star"
          />
          <p className="text-gray-500">{course.rating}</p>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <p className="text-gray-800 font-semibold">{course.price}</p>
          <p className="text-gray-500 line-through">{course.originalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
