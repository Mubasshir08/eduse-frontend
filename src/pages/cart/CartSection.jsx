import React, { useState, useEffect } from "react";
import { FaClock, FaTrash } from "react-icons/fa";
import Navbar from "../../shared/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, setCheckoutData } from "../../redux/cartSlice";
import { getProfile } from "../../api/auth";

const AddToCart = () => {
  const [user, setUser] = useState(null);
  const [images, setImages] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const [selectedItems, setSelectedItems] = useState(
    cartItems.map((item) => item.id)
  );

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

  useEffect(() => {
  const importedImages = import.meta.glob(
    "../../assets/images/courseImages/*",
    { eager: true, query: "?url" }
  );

  const imageMap = {};
  for (const path in importedImages) {
    const parts = path.split("/");
    const relativePath = "assets/images/courseImages/" + parts.pop();
    imageMap[relativePath] = importedImages[path];
  }
  setImages(imageMap);
}, []);

  // Toggle item selection
  const toggleItemSelection = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  // Remove item from cart
  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
    setSelectedItems((prev) => prev.filter((itemId) => itemId !== id));
  };

  // Extract numeric price
  const getNumericPrice = (price) => {
    const numericPrice = parseFloat(price.toString().replace(/[^0-9.]/g, ""));
    return isNaN(numericPrice) ? 0 : numericPrice;
  };

  // Calculate total for selected items
  const calculateTotal = () => {
    return cartItems
      .filter((item) => selectedItems.includes(item.id))
      .reduce((total, item) => {
        const price = getNumericPrice(item.price);
        return total + price * (item.quantity || 1);
      }, 0);
  };

  // Get selected items data
  const getSelectedItemsData = () => {
    return cartItems.filter((item) => selectedItems.includes(item.id));
  };

  // Handle proceed to checkout
  const handleProceedToCheckout = (e) => {
    if (selectedItems.length === 0) {
      e.preventDefault();
      alert("Please select at least one item to checkout");
      return;
    }

    // Store checkout data in Redux
    const checkoutData = {
      subtotal: calculateTotal(),
      selectedItemsData: getSelectedItemsData(),
      selectedItemIds: selectedItems
    };

    dispatch(setCheckoutData(checkoutData));
    navigate("/checkout");
  };

  const getImageUrl = (item) => {
  // If item already has a resolved Vite URL
  if (item.img && (item.img.startsWith('/') || item.img.startsWith('blob:') || item.img.startsWith('http'))) {
    return item.img;
  }
  // Otherwise, get it from the image map
  return images[item.img] || item.img || "https://via.placeholder.com/150x120?text=Course";
};

if (!user) return <p className="p-10 text-center">Loading...</p>;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen font-inter">
        <Navbar />
        <div className="max-w-2xl mx-auto mt-10 bg-white px-16 py-10 rounded-lg shadow-lg text-center">
          <h2 className="font-semibold text-xl text-gray-800 mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-6">Add some courses to get started!</p>
          <Link
            to="/courses"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md"
          >
            Browse Courses
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
          Added To Cart ({cartItems.length} {cartItems.length === 1 ? "item" : "items"})
        </h2>

        {/* Cart Items */}
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-start border rounded-lg p-4 relative">
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
  alt={item.name}
  className="w-24 h-20 rounded-md ml-4 object-cover"
  onError={(e) => {
    e.target.src = "https://via.placeholder.com/150x120?text=Course";
  }}
/>

              {/* Item Details */}
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-blue-700 text-sm pr-4">
                    {item.name}
                  </h3>
                  <span className="text-gray-700 text-sm font-medium whitespace-nowrap">
                    Price: {item.price}
                  </span>
                </div>

                <p className="text-xs text-gray-600 mt-1">
                  Created By <span className="font-medium">{item.author}</span>
                </p>

                {/* Category/Tag */}
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
                className="absolute top-[18px] -right-1 text-red-500 hover:text-red-700"
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

        {/* Related Topics */}
        <div className="mt-8 pb-4">
          <h3 className="font-semibold text-gray-800 text-sm mb-3">Related Topics</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Design Thinking",
              "Web Development",
              "Programming",
              "UI/UX Design",
              "Data Science",
              "Machine Learning",
            ].map((topic, index) => (
              <span
                key={index}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Space before footer */}
      <div className="h-10" />
    </div>
  );
};

export default AddToCart;