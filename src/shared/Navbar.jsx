import React, { useState, useEffect } from "react"
import { FaRegUser, FaSearch } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import EduseLogo from "../assets/images/blog_Images/logo.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    const parsedUser = JSON.parse(storedUser);
    if (parsedUser.token) {
      setIsLoggedIn(true);
    }
  }
}, []);

const handleLogout = () => {
  localStorage.removeItem("user");
  setIsLoggedIn(false);
  navigate("/login");
};


  return (
    <>
      <header className="max-w-7xl mx-auto py-4 px-6 flex items-center justify-between">
        {/* Left: Logo + Search */}
        <div className="flex items-center space-x-6 flex-1">
          <img src={EduseLogo} alt="Eduse Logo" className="h-7 sm:h-8 cursor-pointer" />

          {/* Search */}
          <div className="relative flex-grow max-w-lg hidden md:block">
            <input
              type="text"
              placeholder="Search for any service"
              className="w-full border-2 border-blue-700 rounded-full py-1 pl-10 pr-4 text-sm"
            />
            <FaSearch className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
          </div>
        </div>

        {/* Right menu - desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-8 ml-6 text-gray-700 text-sm font-medium">
            <Link to="#" className="hover:text-blue-700">E-Commerce</Link>
            <Link to="#" className="hover:text-blue-700">E-Learning</Link>
            <Link to="#" className="hover:text-blue-700">Become a Seller</Link>
          </nav>

          {/* Check user login */}
          {!isLoggedIn ? (
            <>
              <Link to="/login">
                <button className="text-blue-700 font-medium px-4 py-2 hover:bg-blue-50 rounded-lg border border-blue-700">
                  Sign in
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-blue-700 text-white font-medium px-6 py-2 rounded-lg">
                  Join
                </button>
              </Link>
            </>
          ) : (
            // Avatar + Dropdown
            <div className="relative group z-30">
              <FaRegUser className="text-lg cursor-pointer" />
              <div className="absolute right-0 mt-3 w-40 bg-white shadow-lg rounded-lg p-2 
        opacity-0 invisible group-hover:opacity-100 group-hover:visible
        transition-all duration-200 z-50">
                <Link to="/dashboard/profile" className="block px-3 py-2 hover:bg-gray-100 rounded">
                  Profile
                </Link>
                <Link to="/dashboard" className="block px-3 py-2 hover:bg-gray-100 rounded">
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-3 py-2 hover:bg-red-100 text-red-500 rounded"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
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
          {/* Search */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for any service"
              className="w-full border-2 border-blue-700 rounded-full py-2 pl-10 pr-4 text-sm"
            />
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>

          {/* Mobile menu for logged in / logged out */}
          {!isLoggedIn ? (
            <div className="flex space-x-2">
              <Link to="/login" className="flex-1 text-center text-blue-700 font-medium px-5 py-2 hover:bg-blue-50 rounded-lg border border-blue-700">
                Sign in
              </Link>
              <Link to="/register" className="flex-1 text-center bg-blue-700 text-white font-medium px-6 py-2 rounded-lg">
                Join
              </Link>
            </div>
          ) : (
            <div className="flex flex-col space-y-3">
              <Link to="/profile" className="hover:text-blue-700">Profile</Link>
              <Link to="/dashboard" className="hover:text-blue-700">Dashboard</Link>
              <button onClick={handleLogout} className="text-red-500 hover:text-red-700 text-left">
                Logout
              </button>
            </div>
          )}

          <nav className="flex flex-col space-y-3 text-gray-700 text-sm font-medium">
            <Link to="#" className="hover:text-blue-700">E-Commerce</Link>
            <Link to="#" className="hover:text-blue-700">E-Learning</Link>
            <Link to="#" className="hover:text-blue-700">Become a Seller</Link>
          </nav>
        </div>
      )}
    </>
  )
}

export default Navbar
