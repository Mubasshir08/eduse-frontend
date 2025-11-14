import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setIntotal } from "../../redux/cartSlice";
import BkashLogo from "../../assets/images/checkout_Images/bkash-logo.png";
import NagadLogo from "../../assets/images/checkout_Images/nagad-logo.png";
import RocketLogo from "../../assets/images/checkout_Images/rocket-logo.png";
import GpayLogo from "../../assets/images/checkout_Images/gpay-logo.png";
import stripeLogo from "../../assets/images/checkout_Images/stripe-logo.png";
import PayoneerLogo from "../../assets/images/checkout_Images/payoneer-logo.png";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import { getProfile } from "../../api/auth";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux state
  const checkoutData = useSelector((state) => state.cart.checkoutData);
  const selectedCartItems = checkoutData.selectedItemsData || [];
  const subtotalFromRedux = checkoutData.subtotal || 0;

  // Auth state
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Form state
  const [pickupFrom, setPickupFrom] = useState("home");
  const [shipping, setShipping] = useState("courier");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    altPhone: "",
    country: "",
    city: "",
    area: "",
    address: ""
  });

  // Dynamic image imports
  const [images, setImages] = useState({});

  // Check authentication
  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await getProfile();
        setUser(res.data);
        setAuthLoading(false);
      } catch (error) {
        console.log("Profile load error:", error);
        setAuthLoading(false);
        // alert("Please login to continue checkout");
        navigate("/login");
      }
    };

    loadUser();
  }, [navigate]);

  // Load images
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

  // Redirect if cart empty
   useEffect(() => {
  // Conditional logic is now inside the hook's callback function
  if (user && !authLoading && selectedCartItems.length === 0) {
    alert("Your cart is empty!");
    navigate("/cart");
  }
}, [user, authLoading, selectedCartItems.length, navigate]);


  // Utility: extract numeric price
  const getNumericPrice = (price) => {
    const numericPrice = parseFloat(price.toString().replace(/[^0-9.]/g, ""));
    return isNaN(numericPrice) ? 0 : numericPrice;
  };

  const subtotal = subtotalFromRedux;
  const condition = 30;
  const shippingCost = shipping === "courier" ? 60 : shipping === "outside" ? 120 : 60;
  const total = subtotal + condition + shippingCost;

  // Store intotal in Redux
  useEffect(() => {
    if (!authLoading) {
      dispatch(setIntotal(parseFloat(total.toFixed(2))));
    }
  }, [total, dispatch, authLoading]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      alert("Please enter your name");
      return false;
    }
    if (!formData.phone.trim()) {
      alert("Please enter your phone number");
      return false;
    }
    if (!formData.country) {
      alert("Please select a country");
      return false;
    }
    if (!formData.city) {
      alert("Please select a city");
      return false;
    }
    if (!formData.area) {
      alert("Please select an area");
      return false;
    }
    if (!formData.address.trim()) {
      alert("Please enter your address");
      return false;
    }
    return true;
  };

  const handlePlaceOrder = () => {
    if (!validateForm()) return;
    if (!termsChecked) {
      alert("Please accept Terms & Conditions");
      return;
    }
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    const orderData = {
      items: selectedCartItems,
      shippingInfo: { pickupFrom, ...formData },
      pricing: {
        subtotal,
        condition,
        shippingCost,
        total: parseFloat(total.toFixed(2))
      },
      paymentMethod,
      shipping
    };

    if (paymentMethod === "stripe") {
      navigate("/stripe-pay", {
        state: {
          total: parseFloat(total.toFixed(2)),
          currency: "BDT",
          orderSummary: orderData.pricing,
          orderData
        }
      });
      return;
    }

    if (paymentMethod === "cod") {
      alert(`Order placed with Cash on Delivery. Total: ${total.toFixed(2)} BDT`);
      navigate("/payment-success", {
        state: { method: "COD", total: total.toFixed(2), orderData }
      });
      return;
    }

    alert(`Selected ${paymentMethod}. (Demo) Payment Successful. Total: ${total.toFixed(2)} BDT`);
    navigate("/payment-success", {
      state: { method: paymentMethod, total: total.toFixed(2), orderData }
    });
  };

  // Get image helper
  const getImageUrl = (item) => {
    if (item.img && (item.img.startsWith('/') || item.img.startsWith('blob:') || item.img.startsWith('http'))) {
      return item.img;
    }
    return images[item.img] || item.img || "https://via.placeholder.com/150x120?text=Course";
  };

  // Show loading while checking auth
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Don't render if no user (will redirect)
  if (!user) {
    return null;
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
        <div className="w-full max-w-6xl grid lg:grid-cols-3 gap-6 px-4">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cart Items */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="font-semibold text-lg mb-4">
                Order Items ({selectedCartItems.length}{" "}
                {selectedCartItems.length === 1 ? "item" : "items"})
              </div>
              <div className="space-y-3 max-h-60 overflow-y-auto">
                {selectedCartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 border-b pb-3">
                    <img
                      src={getImageUrl(item)}
                      alt={item.name}
                      className="w-16 h-16 rounded object-cover"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/60?text=Course";
                      }}
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm text-gray-800">{item.name}</h4>
                      <p className="text-xs text-gray-600">by {item.author}</p>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-800">
                        {(getNumericPrice(item.price) * item.quantity).toFixed(2)} BDT
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Form */}
            <div className="bg-white rounded-2xl shadow-md">
              <div className="bg-blue-600 text-white px-6 py-3 rounded-t-2xl font-semibold">
                Shipping Address (Please Fill Out Your Information)
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-medium">Pick Up Your Parcel From:</span>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="pickup"
                      checked={pickupFrom === "home"}
                      onChange={() => setPickupFrom("home")}
                    />
                    Home
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="pickup"
                      checked={pickupFrom === "university"}
                      onChange={() => setPickupFrom("university")}
                    />
                    University
                  </label>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter Your Name *"
                    className="border rounded-lg p-2 w-full"
                  />
                  <input
                    type="text"
                    name="altPhone"
                    value={formData.altPhone}
                    onChange={handleInputChange}
                    placeholder="Alternative Phone No."
                    className="border rounded-lg p-2 w-full"
                  />
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone No. *"
                    className="border rounded-lg p-2 w-full"
                  />
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="border rounded-lg p-2 w-full"
                  >
                    <option value="">Select a country *</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="India">India</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Other">Other</option>
                  </select>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="border rounded-lg p-2 w-full"
                  >
                    <option value="">Select a city *</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chittagong">Chittagong</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Khulna">Khulna</option>
                  </select>
                  <select
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    className="border rounded-lg p-2 w-full"
                  >
                    <option value="">Select an area *</option>
                    <option value="Gulshan">Gulshan</option>
                    <option value="Banani">Banani</option>
                    <option value="Mohakhali">Mohakhali</option>
                    <option value="Dhanmondi">Dhanmondi</option>
                  </select>
                </div>

                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter Your Address *"
                  className="border rounded-lg p-2 w-full h-20"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl shadow-md">
              <div className="bg-blue-600 text-white px-6 py-3 rounded-t-2xl font-semibold">
                Payment Method (Please Select Your Payment Method)
              </div>
              <div className="p-6 space-y-4">
                <div className="w-full md:w-1/2 bg-[#fafafa] px-5 py-4 border border-[#999999] rounded-md">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                    />
                    Cash on Delivery
                  </label>
                </div>

                <div>
                  <div className="font-light mb-1">Mobile Wallet</div>
                  <div className="flex flex-wrap gap-3">
                    <label className="bg-[#fafafa] px-5 py-3 border border-[#999999] rounded-md cursor-pointer flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        value="bkash"
                        checked={paymentMethod === "bkash"}
                        onChange={() => setPaymentMethod("bkash")}
                      />
                      <img src={BkashLogo} alt="bkash" className="w-16" />
                    </label>

                    <label className="bg-[#fafafa] px-5 py-3 border border-[#999999] rounded-md cursor-pointer flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        value="nagad"
                        checked={paymentMethod === "nagad"}
                        onChange={() => setPaymentMethod("nagad")}
                      />
                      <img src={NagadLogo} alt="nagad" className="w-16" />
                    </label>

                    <label className="bg-[#fafafa] px-5 py-3 border border-[#999999] rounded-md cursor-pointer flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        value="rocket"
                        checked={paymentMethod === "rocket"}
                        onChange={() => setPaymentMethod("rocket")}
                      />
                      <img src={RocketLogo} alt="rocket" className="w-16" />
                    </label>
                  </div>
                </div>

                <div>
                  <div className="font-light mb-1">Debit/Credit Card</div>
                  <div className="w-full md:w-3/5 flex gap-3 bg-[#fafafa] px-5 py-3 border border-[#999999] rounded-md items-center flex-wrap">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        value="stripe"
                        checked={paymentMethod === "stripe"}
                        onChange={() => setPaymentMethod("stripe")}
                      />
                      <img src={stripeLogo} alt="Stripe" className="h-8" />
                    </label>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-8" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="MasterCard" className="h-8" />
                    <img src={GpayLogo} alt="G Pay" className="h-8" />
                    <img src={PayoneerLogo} alt="Payoneer" className="h-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Summary */}
          <div className="bg-white rounded-2xl shadow-md h-fit p-6">
            <div className="font-semibold text-lg mb-4">Checkout Summary</div>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal ({selectedCartItems.length} items)</span>
                <span>{subtotal.toFixed(2)} BDT</span>
              </div>

              <div className="space-y-2">
                <div>Shipping</div>
                <label className="flex justify-between items-center cursor-pointer">
                  <span>Courier Delivery (60 BDT)</span>
                  <input
                    type="radio"
                    name="shippingOption"
                    checked={shipping === "courier"}
                    onChange={() => setShipping("courier")}
                  />
                </label>
                <label className="flex justify-between items-center cursor-pointer">
                  <span>Outside Dhaka (120 BDT)</span>
                  <input
                    type="radio"
                    name="shippingOption"
                    checked={shipping === "outside"}
                    onChange={() => setShipping("outside")}
                  />
                </label>
                <label className="flex justify-between items-center cursor-pointer">
                  <span>Dhaka City (60 BDT)</span>
                  <input
                    type="radio"
                    name="shippingOption"
                    checked={shipping === "dhaka"}
                    onChange={() => setShipping("dhaka")}
                  />
                </label>
              </div>

              <div className="flex justify-between">
                <span>Service Fee</span>
                <span>{condition} BDT</span>
              </div>

              <hr />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>{total.toFixed(2)} BDT</span>
              </div>
            </div>

            <div className="mt-6">
              <label className="flex items-start gap-2 text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={termsChecked}
                  onChange={() => setTermsChecked(!termsChecked)}
                  className="mt-1"
                />
                <span>I have read and agree to the website terms and conditions.</span>
              </label>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="mt-4 bg-blue-600 text-white w-full py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Place Order {total.toFixed(2)} BDT
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;