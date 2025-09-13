import React from "react"
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="bg-white py-">
       <div className="max-w-5xl mx-auto px-12 text-center">
         {/* Title */}
         <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
           TESTIMONIALS
         </h2>
         <p className="text-gray-600 mb-10">Why People Choose us?</p>

         {/* Testimonial Card */}
         <div className="bg-[#f5faff] rounded-2xl shadow-sm p-8 md:p-12 relative">
           {/* Quote Icon */}
           <img className="mb-6 w-20" src="/src/assets/stroke-testimonial.png" alt="" />

           {/* Testimonial Text */}
           <p className="text-gray-700 text-sm sm:text-base max-w-3xl mb-6 text-left">
             “This platform completely changed my student life! <br />
             I started by selling a few notebooks and soon opened my own digital
             shop. The best part? I used my earnings to buy a course on Web
             Development created by another student. Now I’m learning and
             earning—without leaving my campus! It’s more than just a website,
             it’s a launchpad for student entrepreneurs.
           </p>

           {/* User Info */}
           <div className="flex items-center justify-start gap-4 mt-6">
             <img
              src="/src/assets/user1.jpg"
              alt="User"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="text-left">
              <h4 className="font-semibold text-gray-900">Ahmed Musa</h4>
              <p className="text-gray-500 text-sm">Department (CSE)</p>

              {/* Stars */}
              <div className="flex text-yellow-500 mt-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>

         {/* Pagination Dots */}
         <div className="flex justify-center items-center space-x-2 mt-6">
           <span className="w-2.5 h-2.5 bg-blue-200 rounded-full"></span>
           <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
           <span className="w-2.5 h-2.5 bg-blue-200 rounded-full"></span>
         {/* Pagination Dots */}
         </div>
        
       </div>

     </section>
  )
}

export default Testimonials