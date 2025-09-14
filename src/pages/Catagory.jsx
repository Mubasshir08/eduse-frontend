import React from "react";
import { TiMediaPlayOutline } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";

const Catagory = () => {
  return (
    <section className="flex gap-30 sm:px-10 max-w-7xl mx-auto font-Inter my-10">
      {/* left */}
      <div>
        {/* left part-1 */}
        <div className="my-5">
          <h1 className="font-semibold text-xl">Category</h1>
          <p className="">Study Materials</p>
        </div>
        {/*left part-2 */}
        <div>
          <h1 className="text-[#015AD8] text-xl font-bold my-5">Filter</h1>
        </div>
        {/* left 3rd part */}
        <div>
          <h1 className="text-xl">Price</h1>
          {/* max_min-filter */}
          <div className="flex my-2">
            <input
              type="number"
              placeholder="Min"
              className="w-15 text-center rounded-md border-1 border-[#666666] "
            />
            <samp className="flex items-center justify-center">-</samp>

            <input
              type="number"
              placeholder="Max"
              className="w-15 text-center rounded-md border-1 border-[#666666] "
            />

            <button className="mx-2 bg-blue-100 rounded-md w-10 jus flex justify-center items-center ">
              <img src="" alt="" srcset="src\assets\images\Submit.png" />
            </button>
          </div>
          {/* left 4th part */}
          <div className="my-5">
            {/* 4th area child-1 start*/}
            <div>
              <h1 className=" text-xl text-[#666666]">Store Rating</h1>
              <p className="text-[#666666] text-sm">
                Based on a 5-star rating system
              </p>
            </div>
                   {/* 4th area child-1 end */}

                   {/* 4th area child-2 */}
            <div>
              {/* 1st*/}
            <div>
              <div class="flex items-center mb-4 mt-5">
                <input
                  id="default-checkboxon"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                />
                <label
                  for="default-checkboxon"
                  class="ms-2 text-sm font-medium  dark:text-gray-300 text-[#666666]"
                >
                  3.5 & up
                </label>
              </div>
            </div>
            {/* 2nd*/}
            <div>
              <div class="flex items-center mb-4 mt-5">
                <input
                  id="default-checkboxtwo"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-800 focus:ring-2 dark:bg-blue-700 dark:border-blue-600 "
                />
                <label
                  for="default-checkboxtwo"
                  class="ms-2 text-sm font-medium  dark:text-gray-300 text-[#999999]"
                >
                  4.0 & up
                </label>
              </div>
            </div>
            {/* 3rd*/}
            <div>
              <div class="flex items-center mb-4 mt-5">
                <input
                  id="default-checkboxtree"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-800 focus:ring-2 dark:bg-blue-700 dark:border-blue-600 "
                />
                <label
                  for="default-checkboxtree"
                  class="ms-2 text-sm font-medium  dark:text-gray-300 text-[#999999]"
                >
                  4.0 & up
                </label>
              </div>
            </div>
            {/* 4th*/}
            <div>
              <div class="flex items-center mb-4 mt-5">
                <input
                  id="default-checkboxfour"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-800 focus:ring-2 dark:bg-blue-700 dark:border-blue-600 "
                />
                <label
                  for="default-checkboxfour"
                  class="ms-2 text-sm font-medium  dark:text-gray-300 text-[#999999]"
                >
                  4.5 & up
                </label>
              </div>
            </div>
            {/* 5th*/}
            <div>
              <div class="flex items-center mb-4 mt-5">
                <input
                  id="default-checkboxfive"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-800 focus:ring-2 dark:bg-blue-700 dark:border-blue-600 "
                />
                <label
                  for="default-checkboxfive"
                  class="ms-2 text-sm font-medium  dark:text-gray-300 text-[#999999]"
                >
                  5.0 & up
                </label>
              </div>
            </div>
            </div>
            {/* 4th area child-2 end */}
            {/* 4th area child-3 start */}
            <div>
              {/* warranty */}
              <div>
                <h1 className="text-xl text-[#666666]">Warranty Type</h1>
              </div>
              <div>
                {/* child3-part-1 start*/}
                <div>
              <div class="flex items-center mb-4 mt-5">
                <input
                  id="default-checkboxsix"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-800 focus:ring-2 dark:bg-blue-700 dark:border-blue-600 "
                />
                <label
                  for="default-checkboxsix"
                  class="ms-2 text-sm font-medium  dark:text-gray-300 text-[#999999]"
                >
                  No Warranty
                </label>
              </div>
              {/* child3-part-1 end */}
            </div>
              <div>
              <div class="flex items-center mb-4 mt-5">
                <input
                  id="default-checkboxseven"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-800 focus:ring-2 dark:bg-blue-700 dark:border-blue-600 "
                />
                <label
                  for="default-checkboxseven"
                  class="ms-2 text-sm font-medium  dark:text-gray-300 text-[#999999]"
                >
                  1 Year Warranty
                </label>
              </div>
              {/* child3-part-1 end */}
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* middle */}
      <div>
        {/* card-1 */}

        <div className="w-70 h-88 shadow-md bg-base-100">
          {/* img */}
          <figure>
            <div className="p-1 " ><img src="src\assets\images\img1.jpg" alt="" className="rounded-sm w-80 h-50 object-fill "  /></div>
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
                    <div className="items-center flex" ><img className="h-4" src="src\assets\images\Star18.png" alt="" /></div>
                    </div>
                  {/* fav */}
                  <div><FaRegHeart /></div>
                </div>
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div></div>
    </section>
  );
};

export default Catagory;
