  // src/pages/StripePayment.jsx
  import React, { useEffect, useState } from "react";
  import { useLocation, useNavigate } from "react-router-dom";
  import { useSelector, useDispatch  } from "react-redux";
  import { clearCart } from "../../redux/cartSlice";

  const StripePayment = () => {
    const dispatch = useDispatch();
    // const [user, setUser] = useState(null);

    // Get checkout data from Redux
    const checkoutData = useSelector((state) => state.cart.checkoutData);
    const intotal = checkoutData.intotal || 0; // Get the total with shipping and fees
    
    const location = useLocation();
    const navigate = useNavigate();

    const [cardNumber, setCardNumber] = useState("");
    const [nameOnCard, setNameOnCard] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvc, setCvc] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // useEffect(() => {
    //     const loadUser = async () => {
    //       try {
    //         const res = await getProfile();
    //         setUser(res.data);
    //       } catch (error) {
    //         console.log("Profile load error:", error);
    //         window.location.href = "/login";
    //       }
    //     };
    
    //     loadUser();
    //   }, []);

    // helper to remove spaces
    const digitsOnly = (s) => s.replace(/\s+/g, "");

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");

      const digits = digitsOnly(cardNumber);
      if (!/^\d{16}$/.test(digits)) {
        setError("Card number must be 16 digits (use spaces or no spaces).");
        return;
      }
      if (!nameOnCard) {
        setError("Enter name on card.");
        return;
      }
      if (!/^\d{2}\/\d{2}$/.test(expiry)) {
        setError("Expiry must be in MM/YY format.");
        return;
      }
      if (!/^\d{3,4}$/.test(cvc)) {
        setError("CVC must be 3 or 4 digits.");
        return;
      }
      dispatch(clearCart());
      setLoading(true);

      // simulate a small delay like real payment
      await new Promise((r) => setTimeout(r, 1200));

      // Demo card handling:
      // 4242 4242 4242 4242 -> success
      // 4000 0000 0000 9995 -> fail
      if (digits === "4242424242424242") {
        // success
        setLoading(false);
        navigate("/payment-success", { 
          state: { 
            method: "Stripe (test)", 
            total: intotal.toFixed(2),
            orderData: {
              items: checkoutData.selectedItemsData,
              pricing: {
                subtotal: checkoutData.subtotal,
                total: intotal
              }
            }
          } 
        });
        return;
      } else if (digits === "4000000000009995") {
        setLoading(false);
        setError("Card was declined. Try another test card.");
        return;
      } else {
        // treat other 16-digit numbers as success for demo
        setLoading(false);
        navigate("/payment-success", { 
          state: { 
            method: "Stripe (test)", 
            total: intotal.toFixed(2),
            orderData: {
              items: checkoutData.selectedItemsData,
              pricing: {
                subtotal: checkoutData.subtotal,
                total: intotal
              }
            }
          } 
        });
      }
    };

    // if(!user) return <p className="p-10 text-center">Loading...</p>;

    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Stripe - Test Payment</h2>

          <div className="mb-4 text-sm text-gray-600">
            <div className="mb-2">
              <span className="text-gray-500">Subtotal:</span> <strong>{checkoutData.subtotal?.toFixed(2) || '0.00'} BDT</strong>
            </div>
            <div className="mb-3 pb-3 border-b">
              <span className="text-gray-500">Order Total (with shipping & fees):</span> 
              <div className="text-lg font-bold text-blue-600 mt-1">{intotal.toFixed(2)} BDT</div>
            </div>
            <div className="mt-2">Use test card <strong>4242 4242 4242 4242</strong> for success.</div>
            <div className="text-xs text-gray-400 mt-1">Decline test card: <strong>4000 0000 0000 9995</strong></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm">Card number</label>
              <input
                type="text"
                inputMode="numeric"
                placeholder="4242 4242 4242 4242"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full border rounded-md p-2 mt-1"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm">Name on card</label>
                <input
                  type="text"
                  value={nameOnCard}
                  onChange={(e) => setNameOnCard(e.target.value)}
                  className="w-full border rounded-md p-2 mt-1"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label className="text-sm">Expiry (MM/YY)</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  className="w-full border rounded-md p-2 mt-1"
                />
              </div>
            </div>

            <div>
              <label className="text-sm">CVC</label>
              <input
                type="text"
                inputMode="numeric"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                className="w-40 border rounded-md p-2 mt-1"
                placeholder="123"
              />
            </div>

            {error && <p className="text-red-600">{error}</p>}

            <div className="flex items-center justify-between gap-3">
              <button
                type="submit"
                className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
                disabled={loading}
              >
                {loading ? "Processing..." : `Pay ${intotal.toFixed(2)} BDT`}
              </button>

              <button
                type="button"
                onClick={() => navigate(-1)}
                className="text-sm text-gray-600 underline hover:text-gray-800"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  export default StripePayment;