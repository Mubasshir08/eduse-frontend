import React from "react";
import edulog from "../assets/images/logo.png";
import serc from "../assets/images/Vector.png";
import globel from "../assets/images/Group6.png";
import { CiGlobe } from "react-icons/ci";
const Navbar = () => {
  return (
    // nav-bar started
    <nav className="font-inter text-sm px-4 py-2 bg-white  flex items-center justify-between  ">
      {/* logo */}
      <div>
        <img src={edulog} className="h-6" alt="logo" />
      </div>
      {/* search-bar */}
      <div className="flex items-center gap-5 border-3 rounded-4xl  py-1 border-blue-700 xl:w-180 lg:w-80 sm:w-60 px-4 ">
        {/* search icon */}
        <img src={serc} alt="" />
        {/*search */}
        <input
          type="search"
          placeholder="Search for any service"
          id=""
          className="h-6  border-blue-700 text-slate-600 py-2 px-4 rounded w-full  outline-none "
        />
      </div>
      {/* menus */}
      <div className="flex items-center gap-6">
        <ul className="flex items-center gap-6 text-gray-600 font-semibold">
          <li>
            <a href="#" className="hover:text-slate-950 duration-300">
              E-Commerce
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-slate-950 duration-300">
              E-Learning
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-slate-950 duration-300 ">
              Become a Seller
            </a>
          </li>
        </ul>
        {/* button */}
        <button className="w-20 rounded-md border-3 border-blue-700 ">
          Sign in
        </button>
        <button className=" bg-blue-700 bg text-white w-20 py-1 rounded-md">
          Join
        </button>
        <button className="rounded-md  border-blue-700 ">
          <CiGlobe />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
