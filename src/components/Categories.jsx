import React from "react"

const Categories = () => {
  return (
     <section className="bg-white mb-20">
   <div className="max-w-7xl mx-auto px-6">
     {/* Title */}
     <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-900 mb-2">
       SHOP BY CATEGORIES
     </h2>
     <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 text-sm sm:text-base">
       Easily shop by categories including books, notebooks, pens, gadgets, and student essentials —
       all curated for academic life. Find everything you need in one place, sold by students like you!
     </p>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       {/* Left Big Blue Box (Takes more space) */}
       <div className="md:col-span-1 bg-blue-700 text-white rounded-lg p-9 flex flex-col">
         <h3 className="text-2xl font-bold mb-2">Custom Outfit’s</h3>
         <p className="mb-6 text-lg">Your Fashion Choice</p>
         <button className="bg-white text-blue-700 font-medium px-6 py-2 rounded mb-8 w-fit">
           Shop Now
         </button>

         {/* Product Cards Inside */}
         <div className="grid grid-cols-2 gap-6 mt-auto">
           <div className="bg-white text-gray-800 rounded-lg p-4">
             <img
              src="/src/assets/tshirt1.png"
              alt="Guitar T-shirt"
              className="rounded-md mb-3 w-full h-36 object-cover"
            />
            <h4 className="text-sm font-semibold">Guitar T-shirt</h4>
            <p className="text-xs text-gray-600">Price: 450tk (10% Discount)</p>
            <p className="text-xs text-gray-600">Size: S,M,L,XL</p>
            <p className="text-xs text-gray-600">Color: Black & White</p>
          </div>

          <div className="bg-white text-gray-800 rounded-lg p-4">
            <img
              src="/src/assets/tshirt2.png"
              alt="Tea T-shirt"
              className="rounded-md mb-3 w-full h-36 object-cover"
            />
            <h4 className="text-sm font-semibold">Tea T-shirt</h4>
            <p className="text-xs text-gray-600">Price: 450tk (10% Discount)</p>
            <p className="text-xs text-gray-600">Size: S,M,L,XL</p>
            <p className="text-xs text-gray-600">Color: Black & White</p>
          </div>
        </div>
      </div>

      {/* Right Categories Grid (2 columns fixed) */}
      <div className="md:col-span-2 grid grid-cols-2 gap-6">
        {[
          { title: "BOOKS", img: "/src/assets/books.png" },
          { title: "PENS", img: "/src/assets/pens.png" },
          { title: "DEVICES", img: "/src/assets/devices.png" },
          { title: "MOUSE", img: "/src/assets/mouse.png" },
          { title: "STATIONARY ITEM", img: "/src/assets/stationary.png" },
          { title: "NOTES", img: "/src/assets/notes.png" },
        ].map((cat, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <img
              src={cat.img}
              alt={cat.title}
              className="w-full h-36 object-cover"
            />
            <div className="p-3 text-center">
              <h4 className="text-sm font-semibold text-gray-800">
                {cat.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
  )
}

export default Categories