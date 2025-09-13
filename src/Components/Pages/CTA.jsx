import React from "react"

const CTA = () => {
  return (
   <section className="bg-white py-16">
   <div className="max-w-6xl mx-auto px-6">
     {/* Glassmorphism CTA Box */}
     <div className="relative bg-white/40 backdrop-blur-lg border border-white/30 rounded-2xl shadow-md p-10 text-center overflow-hidden">
      
       {/* Background Glow Effects */}
       <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-500 opacity-30 blur-3xl rounded-full"></div>
       <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-500 opacity-30 blur-3xl rounded-full"></div>
       <div className="absolute left-12 top-1/3 w-4 h-4 bg-blue-500 rotate-45"></div>
       <div className="absolute right-12 top-1/4 w-4 h-4 bg-blue-500 rotate-45"></div>
       {/* Background Glow Effects */}

       {/* Content */}
       <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 relative z-10">
         🚀 Ready to Start Your Journey?
       </h2>
       <p className="text-gray-700 max-w-2xl mx-auto mb-6 text-sm sm:text-base relative z-10">
         Empower your education. Build your business. Learn new skills — all from your campus. 
         Join thousands of students who are earning, learning, and thriving through our all-in-one platform.
       {/* Content */}
       </p>

       {/* Email Input + Button */}
       <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto relative z-10">
         <input
           type="email"
           placeholder="Enter your e-mail"
           className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none bg-white/70 backdrop-blur-sm"
         />
         <button className="bg-blue-600 whitespace-nowrap text-white px-6 py-3 rounded-md font-medium">
           Sign up it’s free
         </button>
       {/* Email Input + Button */}
       </div>

     {/* Glassmorphism CTA Box */}
     </div>

     {/* Trusted by Students Section */}
     <div className="mt-16 text-center">
       <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-10">
         TRUSTED BY THOUSANDS OF STUDENTS ACROSS CAMPUSES
       </h3>
       <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
         <div>
           <h4 className="text-2xl md:text-4xl font-bold text-gray-900">1K+</h4>
           <p className="text-black font-bold text-sm mt-2">Active Student Shops</p>
         </div>
         <div>
           <h4 className="text-2xl md:text-4xl font-bold text-blue-600">100+</h4>
           <p className="text-black font-bold text-sm mt-2">Peer-to-Peer Course Enrollments</p>
         </div>
         <div>
           <h4 className="text-2xl md:text-4xl font-bold text-gray-900">200+</h4>
           <p className="text-black font-bold text-sm mt-2">Unique Products & Learning Materials Listed</p>
         </div>
         <div>
           <h4 className="text-2xl sm:text-3xl font-bold text-blue-600">3K+</h4>
           <p className="text-black font-bold text-sm mt-2">AI-Powered Search Interactions</p>
         </div>
       </div>

     {/* Trusted by Students Section */}
     </div>
   </div>
   
 </section>
  )
}

export default CTA