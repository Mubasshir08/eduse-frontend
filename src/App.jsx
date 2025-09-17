import React from "react";

import Navbar from "./Components/Pages/Navbar";
import Hero from "./Components/Pages/Hero";
import Courses from "./Components/Pages/PopularCourses";
import Categories from "./Components/Pages/Categories";
import Testimonials from "./Components/Pages/Testimonials";
import Blogs from "./Components/Pages/Blogs";
import FAQ from "./Components/Pages/FAQ";
import Journey from "./Components/Pages/CTA";
import Footer from "./Components/Pages/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Courses />
      <Categories />
      <Testimonials />
      <Blogs />
      <FAQ />
      <Journey />
      <Footer />
    </div>
  );
}

export default App;
