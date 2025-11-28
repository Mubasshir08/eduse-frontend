import React, { useState } from "react";
import { CiRead, CiUnread } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { loginUser, adminLogin } from "../../api/auth";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Check if email is @admin.com
      const isAdminEmail = email.endsWith('@admin.com');

      let res;
      
      if (isAdminEmail) {
        // Use admin login
        res = await adminLogin({ email, password });
        
        // Save admin user data
        localStorage.setItem("user", JSON.stringify(res.data));
        
        // Redirect to admin dashboard
        setLoading(false);
        navigate("/admin");
      } else {
        // Use regular login
        res = await loginUser({ email, password });
        
        // Save regular user data
        localStorage.setItem("user", JSON.stringify(res.data));
        
        // Redirect to home
        setLoading(false);
        window.location.href = "/";
      }
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || "Login failed.");
    }
  };

  return (
    <form className="w-[454px] rounded-2xl shadow-md mx-auto translate-y-12 p-6" onSubmit={handleLogin}>
      <h3 className="text-[#015AD8] text-center text-2xl font-bold">WELCOME</h3>

      {/* Info message for admin users */}
      {email.endsWith('@admin.com') && (
        <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-lg text-sm mt-4">
          🔐 Admin login detected - You'll be redirected to admin dashboard
        </div>
      )}

      {error && <p className="text-red-600 text-center mt-2">{error}</p>}

      <section className="mt-6">

        {/* Email */}
        <div>
          <h3>
            E-mail<span className="text-red-600">*</span>
          </h3>
          <input
            type="email"
            className="w-full border-2 border-gray-400 mt-2 py-2 px-2 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="mt-4">
          <h3>
            Password<span className="text-red-600">*</span>
          </h3>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full border-2 border-gray-400 mt-2 py-2 px-2 rounded-lg pr-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />

            {/* Toggle Password Icon */}
            <span
              className="absolute top-1/2 right-3 -translate-y-1/3 cursor-pointer text-xl text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <CiRead /> : <CiUnread />}
            </span>
          </div>

          <h3 className="text-[#015AD8] mt-2 text-sm underline cursor-pointer">
            Forgot Password?
          </h3>
        </div>

        {/* Login Button */}
        <button 
          className="bg-[#015AD8] text-white w-full py-3 rounded-md mt-5 disabled:bg-gray-400 disabled:cursor-not-allowed" 
          type="submit"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Divider */}
        <div className="w-1/2 mt-5 mx-auto flex items-center justify-between text-gray-400">
          <hr className="w-[40%]" />
          <h3>Or</h3>
          <hr className="w-[40%]" />
        </div>

        {/* Google Login */}
        <button 
          type="button"
          className="relative border-2 border-[#999999] w-full py-3 rounded-md mt-4 hover:bg-gray-50 transition"
        >
          <FcGoogle size={25} className="absolute top-3 left-16" />
          Continue with Google
        </button>

        {/* Register Redirect */}
        <p className="text-center text-gray-400 mt-4">
          New to Eduse?{" "}
          <Link to="/register" className="text-[#015AD8] underline cursor-pointer">
            Sign Up
          </Link>
        </p>

        {/* Admin Portal Link */}
        {/* <p className="text-center text-gray-500 text-sm mt-4">
          Admin?{" "}
          <Link to="/admin/login" className="text-[#015AD8] hover:underline">
            Go to Admin Portal
          </Link>
        </p> */}
      </section>
    </form>
  );
};

export default SignIn;