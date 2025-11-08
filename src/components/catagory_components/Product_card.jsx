import React from 'react'
import { FaRegHeart } from 'react-icons/fa';
const Product_card = () => {
  return (
    <>
      {/* card-6 start */}
    
            <div className="w-70 h-90 shadow-md bg-base-100">
              {/* img */}
              <figure>
                <div className="p-1 mb-1" ><img src="src\assets\images\img9.jpg" alt="" className="rounded-sm w-80 h-50 object-fill "  /></div>
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
                        <div className="items-center flex" ><img className="h-4" src="src\assets\images\Star18.png" alt="" /></div>
                        </div>
                      {/* fav */}
                      <button><FaRegHeart /></button>
                    </div>
                </div>
              </div>
            </div>
            {/* card-6 ended */}
    </>
  )
}

export default Product_card
