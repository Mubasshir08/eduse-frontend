import React from "react";

const CartSection = () => {
  return (
    <div className="border rounded-lg shadow p-6 mb-6">
      <h2 className="text-lg font-bold mb-4">Added To Cart</h2>
      
      {/* Example Cart Item */}
      <div className="flex justify-between items-start border-b pb-4 mb-4">
        <div>
          <h3 className="text-blue-600 font-medium">
            Design Thinking & UX Fundamentals
          </h3>
          <p className="text-sm text-gray-600">Created by Sarah</p>
        </div>
        <p className="font-semibold">2000 BDT</p>
      </div>

      <div className="flex justify-between items-center">
        <p className="font-bold">Total 3500 BDT</p>
        <button className="bg-blue-600 text-white px-4 py-1 rounded">
          Check Cart
        </button>
      </div>
    </div>
  );
};

export default CartSection;
