// src/pages/PaymentSuccess.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const method = state?.method || "Unknown";
  const total = state?.total || 0;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md bg-white rounded-2xl shadow-md p-6 text-center">
        <h1 className="text-2xl font-bold mb-3">Payment Successful 🎉</h1>
        <p className="mb-4">Your payment of <strong>{total} BDT</strong> via <strong>{method}</strong> was successful.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
