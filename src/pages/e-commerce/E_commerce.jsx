import React from "react";
import Navbar from "../../shared/Navbar";
import { TiMediaPlayOutline } from "react-icons/ti";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Catagory_section from "../../components/e_commerce_components/Catagory_section";
import Products from "../../components/e_commerce_components/Products";
import Shopping_section from "../../components/e_commerce_components/Shopping_section";
import Footer from "../../shared/Footer";

const E_commerce = () => {
  return (
    <div>
      <Navbar />
      <section className="flex xl:flex-row xl:items-start  items-center flex-col mb-12 gap-40 mx-auto max-w-7xl pl-7">
        <Catagory_section />
        <Products />
        <Shopping_section />
      </section>
      <Footer />
    </div>
  );
};

export default E_commerce;
