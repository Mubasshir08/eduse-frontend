import React from "react";

import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Courses from "./pages/PopularCourses";
import Categories from "./pages/Categories";
import Testimonials from "./pages/Testimonials";
import Blogs from "./pages/Blogs";
import FAQ from "./pages/FAQ";
import Journey from "./pages/CTA";
import Footer from "./pages/Footer";

function App() {
  return (
    <div>
      <Header />
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
