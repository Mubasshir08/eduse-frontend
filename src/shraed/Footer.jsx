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
    <footer className="px-20 xl:px-40  mb-3 ">
      {/* top */}
      <section className="flex xl:flex-row md:flex-col justify-between gap-10 border-b-1 border-[#999999]">
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
