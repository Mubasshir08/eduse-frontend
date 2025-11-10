// src/pages/Checkout.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BkashLogo from "../../assets/images/checkout_Images/bkash-logo.png";
import NagadLogo from "../../assets/images/checkout_Images/nagad-logo.png";
import RocketLogo from "../../assets/images/checkout_Images/rocket-logo.png";
import GpayLogo from "../../assets/images/checkout_Images/gpay-logo.png";
import stripeLogo from "../../assets/images/checkout_Images/stripe-logo.png";
import PayoneerLogo from "../../assets/images/checkout_Images/payoneer-logo.png";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";

const Checkout = () => {
  const navigate = useNavigate();
  const [pickupFrom, setPickupFrom] = useState("home");
  const [shipping, setShipping] = useState("courier");
  const [paymentMethod, setPaymentMethod] = useState(""); 
  const [termsChecked, setTermsChecked] = useState(false);

  const subtotal = 2100;
  const condition = 30;
  const shippingCost = shipping === "courier" ? 60 : shipping === "outside" ? 120 : 60;
  const total = subtotal + condition + shippingCost;

  const handlePlaceOrder = () => {
    if (!termsChecked) {
      alert("Please accept Terms & Conditions");
      return;
    }
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    if (paymentMethod === "stripe") {
      navigate("/stripe-pay", {
        state: {
          total,
          currency: "BDT", 
          orderSummary: {
            subtotal,
            condition,
            shippingCost,
            total,
          },
        },
      });
      return;
    }

    
    if (paymentMethod === "cod") {
      alert(`Order placed with Cash on Delivery. Total: ${total} BDT`);
      navigate("/payment-success", { state: { method: "COD", total } });
      return;
    }

    // For mobile wallets or cards (demo)
    alert(`Selected ${paymentMethod}. In demo we consider it paid. Total: ${total} BDT`);
    navigate("/payment-success", { state: { method: paymentMethod, total } });
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <div className="w-full max-w-6xl grid lg:grid-cols-3 gap-6 px-4">
        {/* Shipping + Payment */}
        <div className="lg:col-span-2 space-y-6">
          {/* Shipping Address */}
          <div className="bg-white rounded-2xl shadow-md">
            <div className="bg-blue-600 text-white px-6 py-3 rounded-t-2xl font-semibold">
              Shipping Address (Please Fill Out Your Information)
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-medium">Pick Up Your Parcel From:</span>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="pickup"
                    checked={pickupFrom === "home"}
                    onChange={() => setPickupFrom("home")}
                  />
                  Home
                </label>
                <label className="flex items-center gap-2">
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
                <input type="text" placeholder="Enter Your Name" className="border rounded-lg p-2 w-full" />
                <input type="text" placeholder="Alternative Phone No." className="border rounded-lg p-2 w-full" />
                <input type="text" placeholder="Phone No." className="border rounded-lg p-2 w-full" />
                <select className="border rounded-lg p-2 w-full font-light">
                  <option value="">Select a country</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Other">Other</option>
                </select>

                <select className="border rounded-lg p-2 w-full font-light">
                  <option value="">Select a city</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chittagong">Chittagong</option>
                  <option value="Other">Other</option>
                </select>

                <select className="border rounded-lg p-2 w-full font-light">
                  <option value="">Select an area</option>
                  <option value="Gulshan">Gulshan</option>
                  <option value="Banani">Banani</option>
                  <option value="Mohakhali">Mohakhali</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <textarea placeholder="Enter Your Address" className="border rounded-lg p-2 w-full h-20" />
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-2xl shadow-md">
            <div className="bg-blue-600 text-white px-6 py-3 rounded-t-2xl font-semibold">
              Payment Method (Please Select Your Payment Method)
            </div>
            <div className="p-6 space-y-4">
              <div className="w-1/2 bg-[#fafafa] px-5 py-4 border border-[#999999] rounded-md">
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

              <div className="space-y-2">
                <div className="font-light">Mobile Wallet</div>
                <div className="flex gap-3">
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

              <div className="space-y-2">
                <div className="font-light">Debit/Credit Card</div>
                <div className="w-3/5 flex gap-3 bg-[#fafafa] px-5 py-3 border border-[#999999] rounded-md items-center">
                  
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

                <div className="mt-3 flex items-center gap-4">
                  

                  {/* <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="card-other"
                      checked={paymentMethod === "card-other"}
                      onChange={() => setPaymentMethod("card-other")}
                    />
                    Debit/Credit (demo)
                  </label> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Checkout Summary */}
        <div className="bg-white rounded-2xl shadow-md h-fit p-6">
          <div className="font-semibold text-lg mb-4">Checkout Summary</div>
          <div className="space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{subtotal} BDT</span>
            </div>

            <div className="space-y-2">
              <div>Shipping</div>
              <label className="flex justify-between items-center">
                <span>Courier Delivery</span>
                <input type="radio" checked={shipping === "courier"} onChange={() => setShipping("courier")} />
              </label>
              <label className="flex justify-between items-center">
                <span>Outside Dhaka</span>
                <input type="radio" checked={shipping === "outside"} onChange={() => setShipping("outside")} />
              </label>
              <label className="flex justify-between items-center">
                <span>Dhaka City</span>
                <input type="radio" checked={shipping === "dhaka"} onChange={() => setShipping("dhaka")} />
              </label>
            </div>

            <div className="flex justify-between">
              <span>Condition</span>
              <span>{condition} BDT</span>
            </div>

            <hr />
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>{total} BDT</span>
            </div>
          </div>

          <div className="mt-6">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" checked={termsChecked} onChange={() => setTermsChecked(!termsChecked)} /> I have read and agree to the website terms and conditions.
            </label>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="mt-4 bg-blue-600 text-white w-full py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Place Order {total} BDT
          </button>
        </div>
      </div>
    </div>
    <Footer />
    </div>
    
  );
};

export default Checkout;
