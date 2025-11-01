import React from "react"
import { FaArrowRight } from "react-icons/fa"
import HeroImg from "../assets/images/hero.png"

const Hero = () => {
  return (
    <main className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-10 px-6">
      {/* Left text */}
      <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-snug text-blue-700 mb-6">
          LEARN, EARN, AND GROW <br /> — ALL IN ONE PLACE!
        </h1>
        <p className="text-base md:text-base text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
          Empowering students to become entrepreneurs and educators. Buy & sell study
          essentials, create & enroll in skill-based courses, and earn while you learn.
        </p>
        <button className="flex bg-blue-700 text-white font-semibold py-2 px-7 rounded-md mx-auto md:mx-0 text-lg hover:bg-blue-800 transition">
          Get Started <span className="pl-1 py-1"><FaArrowRight /></span>
        </button>
      </div>

      {/* Right image */}
      <div className="md:w-1/2 relative flex justify-center items-center">
        <div className="absolute bg-blue-700 rounded-full w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[420px] md:h-[420px] z-0"></div>
        <img
          src={HeroImg}
          alt="Smiling student holding books"
          className="relative z-10 w-[320px] sm:w-[360px] md:w-[350px] object-contain"
        />

        {/* Floating labels */}
        <div className="absolute top-8 -left-8 bg-white shadow-md rounded-md px-3 py-1 text-sm font-medium text-gray-700 flex mx-16 items-center space-x-2 z-20">
          <span><span className="ml-16">🚀</span> <br /> Study Smart. Succeed Big</span>
        </div>
        <div className="absolute bottom-16 left-20 bg-white shadow-md rounded-md px-3 py-1 text-sm font-medium text-gray-700 flex items-center z-20">
          <span><span className="ml-7">💡</span> <br /> Real Growth</span>
        </div>
        <div className="absolute top-0 -right-3 bg-white shadow-md rounded-md px-3 py-1 text-sm font-medium text-gray-700 z-20">
          <span><span className="ml-16">🌱</span> <br /> From Classroom to Career</span>
        </div>
        <div className="absolute top-auto right-0 bg-white shadow-md rounded-md mx-6 px-3 py-1 text-sm font-medium text-gray-700 z-20">
          <span><span className="ml-9">🎓</span> <br /> Easy Learning</span>
        </div>
      </div>
    </main>
  )
}

export default Hero