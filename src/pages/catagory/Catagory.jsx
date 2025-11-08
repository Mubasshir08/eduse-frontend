import React from "react";
import Navbar from "../../shared/Navbar";
import { TiMediaPlayOutline } from "react-icons/ti";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Catagory_section from "../../components/catagory_components/Catagory_Section";
import Footer from "../../shared/Footer";
import Product_card from "../../components/catagory_components/Product_card";
import Shopping_Cart from "../../components/catagory_components/Shopping_Cart";

const Catagory = () => {
  return (
    <div>
      <Navbar />
      <section className="flex xl:flex-row xl:items-start  items-center flex-col mb-12 gap-40 mx-auto max-w-7xl pl-7">
        <Catagory_section />
        <Product_card />
        <Shopping_Cart />
      </section>
      <Footer />
    </div>
  );
};

export default Catagory;
