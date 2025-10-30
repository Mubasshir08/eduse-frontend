import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const sampleBlogs = [
      {
     id: 1,
     title: "WHY E-LEARNING IS THE FUTURE OF EDUCATION",
     category: "e-learning • future-of-education",
     description:
       "Traditional classrooms are evolving. With the rise of digital platforms, e-learning is no longer just an option—it’s the future....",
     image: "/src/assets/blog1.png",
   },

      {
         id: 2,
     title: "HOW STUDENT-TO-STUDENT E-COMMERCE BUILDS REAL BUSINESS SKILLS",
     category: "student-ecommerce • real-business-skills",
     description:
       "Forget theory—Eduse lets students dive into real-world entrepreneurship by buying and selling within a secure digital marketplace built just for them....",
     image: "/src/assets/blog2.png",
      },

      {
        id: 3,
     title: "TOP 5 IN-DEMAND SKILLS YOU CAN LEARN ONLINE WITH EDUSE",
     category: "e-learning • future-of-education",
     description:
       "Want to stay ahead in today’s job market? These five skills are in demand, and you can master them all through Eduse’s certified courses......",
     image: "/src/assets/blog3.png",
      }

    ];
    setBlogs(sampleBlogs);
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
          BLOGS
        </h2>

        <div className="flex">
          <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-sm sm:text-base">
            Discover inspiring stories, tips, and guides on how students are
            earning, learning, and growing through our platform. Our blog empowers
            you with real experiences and insights.
          </p>

          <div className="mt-3">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition">
              See More
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {blogs.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm md:shadow-lg transition overflow-hidden"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-44 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/80 rounded-full p-4 shadow-md">
                    <FaPlay className="text-gray-600 text-lg" />
                  </div>
                </div>
              </div>

              <div className="p-4 text-left">
                <h3 className="text-sm font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-blue-600 text-xs mb-2">{post.category}</p>
                <p className="text-gray-600 text-sm mb-2">
                  {post.description}{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Read More
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;