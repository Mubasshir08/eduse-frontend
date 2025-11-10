import React from 'react'
import Navbar from '../../shared/Navbar'
import Footer from '../../shared/Footer'
import CourseCard from '../../components/e_learning/CourseCard'

const E_learning = () => {
  return (
    <div>
      <Navbar />
      {/* // courses page */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-20">
        <CourseCard />
        <CourseCard />
      </div>
      <Footer />
    </div>
  )
}

export default E_learning