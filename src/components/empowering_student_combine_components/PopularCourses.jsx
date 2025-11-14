import React from "react"
import { MdOutlineArrowForwardIos } from "react-icons/md"
import BusinessIcon from "../../assets/images/empowering_student_combine_Images/PopularCourses_Images/business.png"
import DataScienceIcon from "../../assets/images/empowering_student_combine_Images/PopularCourses_Images/datascience.png"
import UiUxIcon from "../../assets/images/empowering_student_combine_Images/PopularCourses_Images/uiux.png"
import WebDesignIcon from "../../assets/images/empowering_student_combine_Images/PopularCourses_Images/webdesign.png"
import CreativesIcon from "../../assets/images/empowering_student_combine_Images/PopularCourses_Images/creatives.png"
import LanguagesIcon from "../../assets/images/empowering_student_combine_Images/PopularCourses_Images/languages.png"
import CyberSecurityIcon from "../../assets/images/empowering_student_combine_Images/PopularCourses_Images/cybersecurity.png"
import BlockChainIcon from "../../assets/images/empowering_student_combine_Images/PopularCourses_Images/blockchain.png"

const courses = [
  { title: "Business & Marketing", icon: BusinessIcon},
  { title: "Data Science", icon: DataScienceIcon},
  { title: "Ui/Ux Design", icon: UiUxIcon},
  { title: "Web Design", icon: WebDesignIcon},
  { title: "Creatives", icon: CreativesIcon},
  { title: "Languages", icon: LanguagesIcon},
  { title: "Cyber Security", icon: CyberSecurityIcon},
  { title: "Block Chain", icon: BlockChainIcon},
];

const PopularCourses = () => {
  return (
     <section className="bg-white py-16">
         <div className="max-w-7xl mx-auto px-1 text-center">
           {/* Title */}
           <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
             POPULAR COURSES
           </h2>
           <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-sm sm:text-base">
             Our platform features the most in-demand courses like Graphic Design,
             Web Development, Data Science, and Cyber Security — all created and
             taught by fellow students.
           </p>

          {/* Courses Grid */}
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-[#f8fbff] border border-gray-200 shadow-sm rounded-lg py-8 px-6 text-center hover:shadow-md transition"
              >
                <img
                  src={course.icon}
                  alt={course.title}
                  className="mx-auto mb-2 w-5 h-5 object-contain"
                />
                <h3 className="text-base font-semibold mb-2">
                  {course.title}
                </h3>
              <p className="text-gray-500 text-sm flex items-center justify-center whitespace-nowrap">
  <span className="flex items-center">
    <span className="text-blue-500">•</span> Duration 4 Months
  </span>
  <span className="flex items-center">
    <span className="text-blue-500">•</span> 33 Classes & 10 Workshop
  </span>
</p>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center space-x-2 mb-6">
            <span className="w-2.5 h-2.5 bg-blue-200 rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-blue-200 rounded-full"></span>
          </div>

          {/* Right Arrow */}
          <div className="relative flex justify-end pr-4">
            <button className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-blue-700 absolute -top-60 -right-9 transition">
              <MdOutlineArrowForwardIos />
            </button>
          </div>
        </div>
      </section>
  )
}

export default PopularCourses