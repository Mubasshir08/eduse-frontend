import React from 'react'
import Navbar from '../../shared/Navbar'
import Footer from '../../shared/Footer'
import CourseCard from '../../components/e_learning_components/CourseCard'
import CourseImg1 from '../../assets/images/course_card_Images/course_Image-1.png'
import CourseImg2 from '../../assets/images/course_card_Images/course_Image-2.png'
import CourseImg3 from '../../assets/images/course_card_Images/course_Image-3.png'
import CourseImg4 from '../../assets/images/course_card_Images/course_Image-4.png'
import { Link } from 'react-router-dom'

const E_learning = () => {
  return (
    <div>
      <Navbar />
      {/* // courses page */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-20 mt-10">
        <Link to = "/course-overview">
          <CourseCard img = {CourseImg1} title = "UX Writing & Microcopy Mastery" author = "Salauddin, UX Studio"/>
        </Link> 
        <Link to = "/course-overview">
          <CourseCard img = {CourseImg2} title = "UI Design with Figma: Complete Guide" author = "Sumaiya jaman"/>
        </Link>  
        <Link to = "/course-overview">
          <CourseCard img = {CourseImg3} title = "UX Writing & Microcopy Mastery" author = "Salauddin, UX Studio"/>
        </Link>
        <Link to = "/course-overview">
          <CourseCard img = {CourseImg4} title = "UX Writing & Microcopy Mastery" author = "Salauddin, UX Studio"/>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default E_learning