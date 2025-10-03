import React from "react";

const CartSection = () => {
  const cart = [
    { title: "Design Thinking & UX Fundamentals", creator: "Sarah, UX Studio", price: 2000 },
    { title: "UI Design With Figma Complete Guide", creator: "Sumaiya Jaman", price: 1500 },
  ];

  return (
    <section className="border rounded-lg shadow p-6 mb-6 bg-white">
      <h2 className="text-lg font-bold mb-4">Added To Cart</h2>

      {cart.map((item, index) => (
        <div key={index} className="flex justify-between items-start border-b pb-4 mb-4">
          <div>
            <h3 className="text-blue-600 font-medium">{item.title}</h3>
            <p className="text-sm text-gray-600">Created By {item.creator}</p>
          </div>
          <p className="font-semibold">{item.price} BDT</p>
        </div>
      ))}

      <div className="flex justify-between items-center">
        <p className="font-bold">Total 3500 BDT</p>
        <button className="bg-blue-600 text-white px-4 py-1 rounded">
          Check Cart
        </button>
      </div>
    </section>
  );
};

export default CartSection;
