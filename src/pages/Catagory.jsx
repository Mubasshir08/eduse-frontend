import React from "react";

import { TiMediaPlayOutline } from "react-icons/ti";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Catagory_section from "../components/Catagory_section";
import Products from "../components/products";
import Shopping_section from "../components/Shopping_section";



const Catagory = () => {
  
  return (
   < section className="flex xl:flex-row xl:items-start  items-center flex-col mb-10 gap-40 mx-auto max-w-7xl pl-7">
   <Catagory_section />
   <Products /> 
   <Shopping_section />
    </section>
  );
};

export default Catagory;
