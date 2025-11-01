import React from 'react'
import Navbar from '../../shared/Navbar'
import Hero from '../../components/Hero'
import PopularCourses from '../../components/PopularCourses'
import Categories from '../../components/Categories'
import Testimonials from '../../components/Testimonials'
import Blogs from '../../components/Blogs'
import FAQ from '../../components/FAQ'
import CTA from '../../components/CTA'
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