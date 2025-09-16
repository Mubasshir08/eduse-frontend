import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Close icon
import { RxCross2 } from "react-icons/rx"; // Delete icon
import { FiShoppingCart } from "react-icons/fi"; // Cart icon (to reopen)

// images
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/img3.jpg";
import image3 from "../assets/images/img6.jpg";
import image4 from "../assets/images/img2.jpg";

const Shopping_section = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "C Programming Book", price: 1000, qty: 1, img: image1 },
    { id: 2, name: "Wired & Wireless Gaming Mice", price: 600, qty: 1, img: image2 },
    { id: 3, name: "Ballpoint Pen", price: 60, qty: 1, img: image3 },
    { id: 4, name: "Research Paper", price: 500, qty: 1, img: image4 },
  ]);

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Subtotal calculation
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <>
      {/* Cart Section */}
      {isOpen ? (
        <div className="fixed md:right-39 xl:right-82 sm:right-0  w-72 h-200 bg-white shadow-2xl z-50 rounded-md flex flex-col">
          {/* Header */}
          <div className="border-b-2 border-gray-300 p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Shopping Cart</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-1 text-gray-600 hover:text-black"
              >
                <AiOutlineClose size={18} />
                <span className="text-sm">Close</span>
              </button>
            </div>
          </div>

          {/* Cart Items (Scrollable Area) */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between pb-2  border-gray-200"
              >
                {/* Image + Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500">
                      {item.qty} × {item.price} BDT
                    </p>
                  </div>
                </div>

                {/* Delete button */}
                <button onClick={() => removeItem(item.id)}>
                  <RxCross2 className="text-gray-500 hover:text-red-500" size={18} />
                </button>
              </div>
            ))}
          </div>

          {/* Bottom Section (Fixed at Bottom) */}
          <div className="sticky bottom-0 bg-white  p-4">
            {/* Subtotal */}
            <div className="flex justify-between items-center font-medium mb-3">
              <span>Subtotal:</span>
              <span>BDT {subtotal}</span>
            </div>

            {/* Buttons */}
            <div className="space-y-2">
              <button className="w-full py-2 border rounded-md hover:bg-gray-100 text-sm">
                View Cart
              </button>
              <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Floating Cart Icon to Reopen
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 z-50"
        >
          <FiShoppingCart size={24} />
        </button>
      )}
    </>
  );
};

export default Shopping_section;
