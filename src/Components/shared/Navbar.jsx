import React, { useState } from "react"
import Logo from "../../assets/images/eduse-logo.png"
import { PiShoppingCartLight } from "react-icons/pi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="max-w-6xl mx-auto py-4 px-6 flex items-center justify-between">
        {/* Left: Logo + Search */}
        <div className="flex items-center space-x-6 flex-1 ">
          <img src={Logo} alt="Eduse Logo" className="h-7 sm:h-8" />
           <p className="hover:text-blue-700 my-">Explore</p>

          <div className="relative flex-grow max-w-lg hidden md:block">
            <input
              type="text"
              placeholder="Search for any service"
              className="w-full border-2 border-blue-700 rounded-full py-1 pl-10 pr-4 text-sm"
            />
            <img
              src="/src/assets/images/Vector.png"
              alt="search icon"
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4"
            />
          </div>
        </div>

        {/* Right: Nav + Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex ml-2 text-gray-700 text-sm font-medium">
            <a href="#" className="hover:text-blue-700">Become a Seller</a>
          </nav>

          <PiShoppingCartLight className=""/>  

          <button className="text-blue-700 font-medium px-4 py-2 hover:bg-blue-50 rounded-lg border border-blue-700">
            Log in
          </button>
          <button className="bg-blue-700 text-white font-medium px-6 py-2 rounded-lg">
            Sign Up
          </button>
          <img className="w-10" src="/src/assets/Group6.png" alt="" />
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
        >
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </button>
      </header>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for any service"
              className="w-full border-2 border-blue-700 rounded-full py-2 pl-10 pr-4 text-sm"
            />
            <img
              src="/src/assets/Vector.png"
              alt="search icon"
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4"
            />
          </div>

          <div className="flex space-x-2">
            <button className="flex-1 text-blue-700 font-medium px-5 py-2 hover:bg-blue-50 rounded-lg border border-blue-700">
              Sign in
            </button>
            <button className="flex-1 bg-blue-700 text-white font-medium px-6 py-2 rounded-lg">
              Join
            </button>
          </div>

          <nav className="flex flex-col space-y-3 text-gray-700 text-sm font-medium">
            <a href="#" className="hover:text-blue-700">E-Commerce</a>
            <a href="#" className="hover:text-blue-700">E-Learning</a>
            <a href="#" className="hover:text-blue-700">Become a Seller</a>
          </nav>
        </div>
      )}
    </>
  )
}

export default Navbar
