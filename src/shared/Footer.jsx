<<<<<<< HEAD
import React from "react"
import EduseLogo from "../assets/images/eduse-logo.png"
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-12 pb-6">
   <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
     {/* Left: Logo + Text */}
     <div>
       <div className="flex items-center mb-4">
         <img src={EduseLogo} alt="eduse logo" className="h-10 mr-2" />
         <span className="text-xl font-bold text-blue-700"></span>
       </div>
       <p className="text-gray-600 text-base ml-2">A Online Platform</p>
     {/* Left: Logo + Text */}
     </div>

     {/* About Us */}
     <div>
       <h4 className="text-gray-900 font-semibold mb-4">About Us</h4>
       <ul className="space-y-2 text-sm text-gray-600 ml-2">
         <li><span className='mr-1'>•</span> Careers</li>
         <li><span className='mr-1'>•</span> Press & News</li>
         <li><span className='mr-1'>•</span> Partnerships</li>
         <li><span className='mr-1'>•</span> Privacy Policy</li>
         <li><span className='mr-1'>•</span> Terms Of Service</li>
         <li><span className='mr-1'>•</span> Intellectual Property Claims</li>
         <li><span className='mr-1'>•</span> Investor Relations</li>
       </ul>
     {/* About Us */}
     </div>

     {/* Support And Education */}
     <div>
       <h4 className="text-gray-900 font-semibold mb-4">Support And Education</h4>
       <ul className="space-y-2 text-sm text-gray-600 ml-1">
         <li><span className='mr-1'>•</span> Help & Support</li>
         <li><span className='mr-1'>•</span> Trust & Safety</li>
         <li><span className='mr-1'>•</span> Selling On Eduse</li>
         <li><span className='mr-1'>•</span> Buying On Eduse</li>
         <li><span className='mr-1'>•</span> Eduse Guides</li>
       </ul>
     {/* Support And Education */}
     </div>

     {/* Community */}
     <div>
       <h4 className="text-gray-900 font-semibold mb-4">Community</h4>
       <ul className="space-y-2 text-sm text-gray-600 ml-2">
         <li><span className='mr-1'>•</span> Customer Success Stories</li>
         <li><span className='mr-1'>•</span> Community Hub</li>
         <li><span className='mr-1'>•</span> Forum</li>
         <li><span className='mr-1'>•</span> Events</li>
         <li><span className='mr-1'>•</span> Blog</li>
         <li><span className='mr-1'>•</span> Creators</li>
         <li><span className='mr-1'>•</span> Invite A Friend</li>
         <li><span className='mr-1'>•</span> Become A Seller</li>
         <li><span className='mr-1'>•</span> Community Standards</li>
       </ul>
     {/* Community */}
     </div>
   </div>

   {/* Bottom Line */}
   <div className=" pt-6 mb-10">
     <div className='border-t border-gray-300 mb-10 ml-9 mr-12'></div>
     <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
       <p className="text-sm text-gray-500">
         © 2025 Eduse Inc. All Rights Reserved.
       </p>

       {/* Social Icons Section */}
       <div className="flex space-x-5 mt-4 md:mt-0 text-gray-500 text-lg">
         <a><FaFacebookF /></a>
         <a><FaInstagram /></a>
         <a><FaTwitter /></a>
         <a><FaPinterestP /></a>
         <a><FaYoutube /></a>
       {/* Social Icons Section */}
       </div>

     </div>

   {/* Bottom Line */}
   </div>

 </footer>
  )
}

export default Footer
=======
import React from "react";
import Llogo from "../assets/images/llogo.png";
// social media logo start
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="px-20 xl:px-40  my-20 ">
      {/* top */}
      <section className="flex xl:flex-row md:flex-col flex-col items-center xl:items-start justify-between gap-10 border-b-1 border-[#999999]">
        {/* part-1 */}
        <div className=" flex flex-col ">
          <div>
            <img src={Llogo} alt="img" />
          </div>
          <div className="w-[274px] text-center py-5 ">
            <p className="text-[32px]  text-[#666666]">A online Platform</p>
          </div>
        </div>
        {/* part-2 */}
        <div className="flex justify-between mt-12 xl:w-[70%] md:w-[100%] flex-col md:flex-row">
          {/* ch-1 */}
          <div>
            <h3 className=" font-bold text-[24px]">About us</h3>

            <ul className="list-disc p-6">
              <li className="text-[#666666] hover:text-black">
                <a href="#">Careers</a>
              </li>
              <li className="text-[#666666] hover:text-black">
                <a href="#">Press & News</a>
              </li>
              <li className="text-[#666666] hover:text-black">
                <a href="#">Partnerships</a>
              </li>
              <li className="text-[#666666] hover:text-black">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="text-[#666666] hover:text-black">
                <a href="#">Terms of Service</a>
              </li>
              <li className="text-[#666666] hover:text-black">
                <a href="#">Intellectual Property Claims</a>
              </li>
              <li className="text-[#666666] hover:text-black">
                <a href="#">Investor Relations</a>
              </li>
            </ul>
          </div>
          {/* ch-2 */}
          <div>
            <h3 className=" font-bold text-[24px]">Support and Education</h3>

            <ul className="list-disc p-6">
              <li className="text-[#666666] hover:text-black">
                <a href="#">Help & Support</a>
              </li>
              <li className="text-[#666666] hover:text-black">
                <a href="#">Trust & Safety</a>
              </li>
              <li className="text-[#666666] hover:text-black">
                <a href="#">Selling on eduse</a>
              </li>
              <li className="text-[#666666] hover:text-black">
                <a href="#">Buying on eduse</a>
              </li>
              <li className="text-[#666666] hover:text-black">
                <a href="#">Eduse Guides</a>
              </li>
            </ul>
          </div>
          {/* ch-3 */}
          <div>
            <h3 className=" font-bold text-[24px]">Community</h3>

            <ul className="list-disc p-6">
              <li className="text-[#666666] hover:text-black">
                <a href="#">Customer Success Stories</a>
              </li>
              <li className="text-[#666666] hover:text-black">
                <a href="#">Community Hub</a>
              </li>
              <li className="text-[#666666] hover:text-black">
                <a href="#">Forum</a>
              </li>
              <li className="text-[#666666] hover:text-black">
                <a href="#">Events</a>
              </li>
              <li className="text-[#666666] hover:text-black">
                <a href="#">Blog</a>
              </li>
              <li className="text-[#666666] hover:text-black">
                <a href="#">Creators</a>
              </li>
              <li className="text-[#666666] hover:text-black">
                <a href="#">Invite a Friend</a>
              </li>
              <li className="text-[#666666] hover:text-black">
                <a href="#">Become a Seller</a>
              </li>
              <li className="text-[#666666] hover:text-black">
                <a href="#">Community Standards</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* bottom */}
      <section className="flex justify-between mt-4 h-10">
        <div>
          <p className="text-[#999999]">
            &copy;2025 eduse Inc. All rights reserved.
          </p>
        </div>
        {/* part-2 */}
        <div className="flex gap-2 opacity-50">
          <a href="#"><FaFacebook /></a>
          <FaInstagramSquare />
          <a href="#"><AiFillTwitterCircle /></a>
          <a href="#"><FaPinterest /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </section>
      {/* part-1 */}
    </footer>
  );
};

export default Footer;
>>>>>>> course-overview-rating-review
