import React from 'react'
import Navbar from '../../shared/Navbar'
import Hero from '../../components/empowering_student_combine_components/Hero'
import PopularCourses from '../../components/empowering_student_combine_components/PopularCourses'
import Categories from '../e-commerce/Categories'
import Testimonials from '../../components/empowering_student_combine_components/Testimonials'
import Blogs from '../../components/empowering_student_combine_components/Blogs'
import FAQ from '../../components/empowering_student_combine_components/FAQ'
import CTA from '../../components/empowering_student_combine_components/CTA'
import Footer from '../../shared/Footer'

const Empowering_Student_Combine = () => {
  return (
    <div className='min-h-screen bg-[#f8fbff]'>
      <Navbar />
      <Hero />
      <PopularCourses />
      <Categories />
      <Testimonials />
      <Blogs />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default Empowering_Student_Combine