import React from "react"

import Header from "../Pages/Header"
import Hero from "../Pages/Hero"
import PopularCourses from "../Pages/PopularCourses"
import Categories from "../Pages/Categories"
import Testimonials from "../Pages/Testimonials"
import Blogs from "../Pages/Blogs"
import FAQ from "../Pages/FAQ"
import CTA from "../Pages/CTA"
import Footer from "../Pages/Footer"

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f8fbff]">
      <Header />
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

export default Home
