import React from 'react'
import { FaRegHeart } from 'react-icons/fa';

// images
import Image1 from "../../assets/images/e_commerce_Images/img1.jpg";
import Image2 from "../../assets/images/e_commerce_Images/img2.jpg";
import Image3 from "../../assets/images/e_commerce_Images/img3.jpg";
import Image4 from "../../assets/images/e_commerce_Images/img4.jpg";
import Image5 from "../../assets/images/e_commerce_Images/img5.jpg";
import Image6 from "../../assets/images/e_commerce_Images/img6.jpg";
import Image7 from "../../assets/images/e_commerce_Images/img7.jpg";
import Image8 from "../../assets/images/e_commerce_Images/img8.jpg";
import Image9 from "../../assets/images/e_commerce_Images/img9.jpg";
import StarImg from "../../assets/images/e_commerce_Images/Star18.png";

const products = () => {
  return (
    <>
      {/* middle */}
      <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5  g-6">
        {/* card-1 */}

        <div className="w-70 h-90 shadow-md bg-base-100">
          {/* img */}
          <figure>
            <div className="p-1 mb-1 " ><img src={Image1} alt="" className="rounded-sm w-80 h-50 object-fill "  /></div>
          </figure>
          {/* body */}
          <div className="px-6">
            {/* bestseller */}
            <div className="bg-[#D1E8FF] w-18 text-center rounded-2xl"><p className="text-sm text-[#666666] ">Bestseller</p></div>
           {/*book names&st/so  */}
            <div>
                <h1 className="text-[#666666]">Programming Books Set</h1>
                <p className="text-[#015AD8]">In stock*</p>
                <h1 className="text-[24px] font-semibold">BDT 1500.34</h1>
                {/* rating & fav section */}
                <div className="flex justify-between">
                  {/* rate */}
                  <div className="flex gap-1">
                    <p>5.4</p>
                    <div className="items-center flex" ><img className="h-4" src={StarImg} alt="" /></div>
                    </div>
                  {/* fav */}
                  <button><FaRegHeart /></button>
                </div>
            </div>
          </div>
        </div>

          {/* card-1ended */}
          {/* card-2stat */}
        
        <div className="w-70 h-90  shadow-md bg-base-100">
          {/* img */}
          <figure>
            <div className="p-1  mb-1" ><img src={Image2} alt="" className="rounded-sm w-80 h-50 object-fill "  /></div>
          </figure>
          {/* body */}
          <div className="px-6">
            {/* bestseller */}
            <div className="bg-[#D1E8FF] w-18 text-center rounded-2xl"><p className="text-sm text-[#666666] ">Bestseller</p></div>
           {/*book names&st/so  */}
            <div>
                <h1 className="text-[#666666]">Stationary Item Set Package</h1>
                <p className="text-[#015AD8]">In stock*</p>
                <h1 className="text-[24px] font-semibold">BDT 1,000.34</h1>
                {/* rating & fav section */}
                <div className="flex justify-between">
                  {/* rate */}
                  <div className="flex gap-1">
                    <p>4.4 </p>
                    <div className="items-center flex" ><img className="h-4" src={StarImg} alt="" /></div>
                    </div>
                  {/* fav */}
                  <button><FaRegHeart /></button>
                </div>
            </div>
          </div>
        </div>
        {/* card-2 end */}
          {/* card-3 start */}

        <div className="w-70 h-90 shadow-md bg-base-100">
          {/* img */}
          <figure>
            <div className="p-1 mb-1 " ><img src={Image3} alt="" className="rounded-sm w-80 h-50 object-fill "  /></div>
          </figure>
          {/* body */}
          <div className="px-6">
            {/* bestseller */}
            <div className="bg-[#D1E8FF] w-18 text-center rounded-2xl"><p className="text-sm text-[#666666] ">Bestseller</p></div>
           {/*book names&st/so  */}
            <div>
                <h1 className="text-[#666666]">Wired & Wireless Gaming Mice</h1>
                <p className="text-[#015AD8]">In stock*</p>
                <h1 className="text-[24px] font-semibold">BDT 2000.50</h1>
                {/* rating & fav section */}
                <div className="flex justify-between">
                  {/* rate */}
                  <div className="flex gap-1">
                    <p>5.4</p>
                    <div className="items-center flex" ><img className="h-4" src={StarImg} alt="" /></div>
                    </div>
                  {/* fav */}
                  <button><FaRegHeart /></button>
                </div>
            </div>
          </div>
        </div>
        {/* card-3 ended */}
        
        {/* card-4 start */}

        <div className="w-70 h-90 shadow-md bg-base-100">
          {/* img */}
          <figure>
            <div className="p-1 mb-1 " ><img src={Image4} alt="" className="rounded-sm w-80 h-50 object-fill "  /></div>
          </figure>
          {/* body */}
          <div className="px-6">
            {/* bestseller */}
            <div className="bg-[#D1E8FF] w-18 text-center rounded-2xl"><p className="text-sm text-[#666666] ">Bestseller</p></div>
           {/*book names&st/so  */}
            <div>
                <h1 className=" text-[#666666]">RGB Gaming Keyboard 87 Keys</h1>
                <p className="text-[#015AD8]">In stock*</p>
                <h1 className="text-[24px] font-semibold">BDT 1500.34</h1>
                {/* rating & fav section */}
                <div className="flex justify-between">
                  {/* rate */}
                  <div className="flex gap-1">
                    <p>5.4</p>
                    <div className="items-center flex" ><img className="h-4" src={StarImg} alt="" /></div>
                    </div>
                  {/* fav */}
                  <button><FaRegHeart /></button>
                </div>
            </div>
          </div>
        </div>
          {/* card-4 ended */}
          {/* card-5 start */}
        
        <div className="w-70 h-90  shadow-md bg-base-100">
          {/* img */}
          <figure>
            <div className="p-1 mb-1 " ><img src={Image5} alt="" className="rounded-sm w-80 h-50 object-fill "  /></div>
          </figure>
          {/* body */}
          <div className="px-6">
            {/* bestseller  off*/}
            {/* <div className="bg-[#D1E8FF] w-18 text-center rounded-2xl"><p className="text-sm text-[#666666] ">Bestseller</p></div> */}
           {/*book names&st/so  */}
            <div>
                <h1 className="text-[#666666]">Backpack For Men & Women </h1>
                <p className="pt-5 text-[#015AD8]">In stock*</p>
                <h1 className="text-[24px] font-semibold">BDT 950.54</h1>
                {/* rating & fav section */}
                <div className="flex justify-between">
                  {/* rate */}
                  <div className="flex gap-1">
                    <p>4.6</p>
                    <div className="items-center flex" ><img className="h-4" src={StarImg} alt="" /></div>
                    </div>
                  {/* fav */}
                  <button><FaRegHeart /></button>
                </div>
            </div>
          </div>
        </div>
        {/* car-5 end */}
          {/* card-6 start */}

        <div className="w-70 h-90 shadow-md bg-base-100">
          {/* img */}
          <figure>
            <div className="p-1 mb-1" ><img src={Image6} alt="" className="rounded-sm w-80 h-50 object-fill "  /></div>
          </figure>
          {/* body */}
          <div className="px-6">
            
            {/* best seler potion off */}
            {/* *bestseller
            <div className="bg-[#D1E8FF] w-18 text-center rounded-2xl"><p className="text-sm text-[#666666] ">Bestseller</p></div> */}

           {/*book names&st/so  */}
            <div>
                <h1 className=" my-3 text-[#666666]">BALL PEN - EDGE</h1>
                <p className="text-[#015AD8]">In stock*</p>
                <h1 className="text-[24px] font-semibold">BDT 4.34  <samp className=" text-sm ">(per pice)</samp> </h1>
                {/* rating & fav section */}
                <div className="flex justify-between">
                  {/* rate */}
                  <div className="flex gap-1">
                    <p>5.4</p>
                    <div className="items-center flex" ><img className="h-4" src={StarImg} alt="" /></div>
                    </div>
                  {/* fav */}
                  <button><FaRegHeart /></button>
                </div>
            </div>
          </div>
        </div>
        {/* card-6 ended */}

         {/* card-7 strat */}

        <div className="w-70 h-90 shadow-md bg-base-100">
          {/* img */}
          <figure>
            <div className="p-1 mb-1 " ><img src={Image7} alt="" className="rounded-sm w-80 h-50 object-fill "  /></div>
          </figure>
          {/* body */}
          <div className="px-6 ">
            {/* bestseller off */}
            {/* <div className="bg-[#D1E8FF] w-18 text-center rounded-2xl"><p className="text-sm text-[#666666] ">Bestseller</p></div> */}
           {/*book names&st/so  */}
            <div>
                <h1 className="text-[#666666]">Handwrite Notes</h1>
                <p className="pt-5 text-[#015AD8]">In stock*</p>
                <h1 className="text-[24px] font-semibold">BDT 450.34</h1>
                {/* rating & fav section */}
                <div className="flex justify-between">
                  {/* rate */}
                  <div className="flex gap-1">
                    <p>3.4</p>
                    <div className="items-center flex" ><img className="h-4" src={StarImg} alt="" /></div>
                    </div>
                  {/* fav */}
                  <button><FaRegHeart /></button>
                </div>
            </div>
          </div>
        </div>

          {/* card-7ended */}
          {/* card-8stat */}
        
        <div className="w-70 h-90  shadow-md bg-base-100">
          {/* img */}
          <figure>
            <div className="p-1  mb-1" ><img src={Image8} alt="" className="rounded-sm w-80 h-50 object-fill "  /></div>
          </figure>
          {/* body */}
          <div className="px-6 ">
            
            {/* bestseller off */}
            {/* <div className="bg-[#D1E8FF] w-18 text-center rounded-2xl"><p className="text-sm text-[#666666] ">Bestseller</p></div> */}
           {/*book names&st/so  */}
            <div >
                <h1 className="text-[#666666]">Sunglass For Men</h1>
                <p className="pt-5 text-[#015AD8]">In stock*</p>
                <h1 className="text-[24px] font-semibold">BDT 1,000.34</h1>
                {/* rating & fav section */}
                <div className="flex justify-between">
                  {/* rate */}
                  <div className="flex gap-1">
                    <p>3.5</p>
                    <div className="items-center flex" ><img className="h-4" src={StarImg} alt="" /></div>
                    </div>
                  {/* fav */}
                  <button><FaRegHeart /></button>
                </div>
            </div>
          </div>
        </div>
        {/* card-8 end */}
         {/* card-6 start */}

        <div className="w-70 h-90 shadow-md bg-base-100">
          {/* img */}
          <figure>
            <div className="p-1 mb-1" ><img src={Image9} alt="" className="rounded-sm w-80 h-50 object-fill "  /></div>
          </figure>
          {/* body */}
          <div className="px-6">
            
            {/* best seler potion off */}
            {/* *bestseller
            <div className="bg-[#D1E8FF] w-18 text-center rounded-2xl"><p className="text-sm text-[#666666] ">Bestseller</p></div> */}

           {/*book names&st/so  */}
            <div>
                <h1 className=" my-3 text-[#666666]"> Nike Baseball
Cap</h1>
                <p className="text-[#015AD8]">In stock*</p>
                <h1 className="text-[24px] font-semibold">BDT 450.34</h1>
                {/* rating & fav section */}
                <div className="flex justify-between">
                  {/* rate */}
                  <div className="flex gap-1">
                    <p>2.4</p>
                    <div className="items-center flex" ><img className="h-4" src={StarImg} alt="" /></div>
                    </div>
                  {/* fav */}
                  <button><FaRegHeart /></button>
                </div>
            </div>
          </div>
        </div>
        {/* card-6 ended */}
        

        
        </div>
    </>
  )
}

export default products