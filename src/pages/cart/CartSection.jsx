import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import Navbar from "../../shared/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
  setCheckoutData,
} from "../../redux/cartSlice";
import { getProfile } from "../../api/auth";

const AddToCart = () => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const [selectedItems, setSelectedItems] = useState(
    cartItems.map((item) => item.id)
  );

  // 🔹 Load user profile
  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await getProfile();
        setUser(res.data);
      } catch (error) {
        console.log("Profile load error:", error);
        window.location.href = "/login";
      }
    };
    loadUser();
  }, []);

  // 🔹 Toggle item selection
  const toggleItemSelection = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id]
    );
  };

  // 🔹 Remove item from cart
  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
    setSelectedItems((prev) => prev.filter((itemId) => itemId !== id));
  };

  // 🔹 Convert price string to number
  const getNumericPrice = (price) => {
    const numeric = parseFloat(price.toString().replace(/[^0-9.]/g, ""));
    return isNaN(numeric) ? 0 : numeric;
  };

  // 🔹 Calculate total
  const calculateTotal = () => {
    return cartItems
      .filter((item) => selectedItems.includes(item.id))
      .reduce(
        (total, item) =>
          total + getNumericPrice(item.price) * (item.quantity || 1),
        0
      );
  };

  // 🔹 Get selected items data
  const getSelectedItemsData = () =>
    cartItems.filter((item) => selectedItems.includes(item.id));

  // 🔹 Proceed to checkout
  const handleProceedToCheckout = (e) => {
    if (selectedItems.length === 0) {
      e.preventDefault();
      alert("Please select at least one item to checkout");
      return;
    }

    const checkoutData = {
      subtotal: calculateTotal(),
      selectedItemsData: getSelectedItemsData(),
      selectedItemIds: selectedItems,
    };

    dispatch(setCheckoutData(checkoutData));
    navigate("/checkout");
  };

  // 🔹 Get image URL (supports backend URL or placeholder)
  const getImageUrl = (item) => {
  const img = item?.image || item?.img; // supports both

  if (!img)
    return "https://via.placeholder.com/150x120?text=Product";

  if (img.startsWith("http") || img.startsWith("blob:")) {
    return img;
  }

  return `${import.meta.env.VITE_API_BASE_URL.replace("/api", "")}${img}`;
};


  if (!user)
    return <p className="p-10 text-center">Loading user profile...</p>;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen font-inter">
        <Navbar />
        <div className="max-w-2xl mx-auto mt-10 bg-white px-16 py-10 rounded-lg shadow-lg text-center">
          <h2 className="font-semibold text-xl text-gray-800 mb-4">
            Your Cart is Empty
          </h2>
          <p className="text-gray-600 mb-6">
            Add some products to get started!
          </p>
          <Link
            to="/products"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-inter">
      <Navbar />
      <div className="max-w-4xl mx-auto mt-10 bg-white px-8 py-6 rounded-lg shadow-lg">
        {/* Header */}
        <h2 className="font-semibold text-lg text-gray-800 mb-4">
          Added To Cart ({cartItems.length}{" "}
          {cartItems.length === 1 ? "item" : "items"})
        </h2>

        {/* Cart Items */}
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-start border rounded-lg p-4 pr-5 relative"
            >
              {/* Checkbox */}
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => toggleItemSelection(item.id)}
                className="accent-blue-600 mt-2 cursor-pointer"
              />

              {/* Image */}
              <img
                src={getImageUrl(item)}
                alt={item.name || item.title}
                className="w-24 h-20 rounded-md ml-4 object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/150x120?text=Product";
                }}
              />

              {/* Item Details */}
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-blue-700 text-sm pr-4">
                    {item.name || item.title}
                  </h3>
                  <span className="text-gray-700 text-sm font-medium whitespace-nowrap mr-2">
                    Price: {item.price} BDT
                  </span>
                </div>

                <p className="text-xs text-gray-600 mt-1">
                  Created By <span className="font-medium">{item.author}</span>
                </p>

                {/* Category */}
                {item.category && (
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="bg-blue-100 text-gray-700 text-[11px] font-semibold px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                  </div>
                )}

                {/* Quantity Control */}
                <div className="flex items-center space-x-4 mt-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-600">Quantity:</span>
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: Math.max(1, item.quantity - 1),
                          })
                        )
                      }
                      className="w-6 h-6 border rounded flex items-center justify-center hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="text-sm font-medium w-8 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity + 1,
                          })
                        )
                      }
                      className="w-6 h-6 border rounded flex items-center justify-center hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal */}
                  <span className="text-xs text-gray-600">
                    Subtotal: {getNumericPrice(item.price) * item.quantity} BDT
                  </span>
                </div>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="absolute top-[18px] right-2 text-red-500 hover:text-red-700"
                title="Remove from cart"
              >
                <FaTrash className="text-sm" />
              </button>
            </div>
          ))}
        </div>

        {/* Total Section */}
        <div className="border-t mt-6 pt-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-600 mb-1">
              {selectedItems.length} item(s) selected
            </p>
            <p className="font-medium text-gray-700 text-sm">
              Total{" "}
              <span className="font-semibold text-lg ml-2">
                {calculateTotal().toFixed(2)} BDT
              </span>
            </p>
          </div>
          <button
            onClick={handleProceedToCheckout}
            className={`${
              selectedItems.length === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white text-sm font-medium px-5 py-2 rounded-md transition-colors`}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      <div className="h-10" />
    </div>
  );
};

export default AddToCart;
