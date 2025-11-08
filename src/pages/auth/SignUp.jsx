import React, { useState } from "react";
import { CiRead, CiUnread } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { registerUser } from "../../api/auth";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      return setError("Passwords do not match.");
    }

    try {
      await registerUser({ name, email, password });
      window.location.href = "/login";
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed.");
    }
  };

  return (
    <form className="w-[454px] rounded-2xl shadow-md mx-auto my-5 pb-3 p-6" onSubmit={handleRegister}>
      <h3 className="text-[#015AD8] text-center text-2xl font-bold">SIGN UP</h3>

      {error && <p className="text-red-600 text-center mt-2">{error}</p>}

      <section className="mt-5">
        <div>
          <h3>Full Name*</h3>
          <input
            type="text"
            className="w-full border-2 border-gray-400 my-3 py-2 px-2 rounded-lg"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />
        </div>

        <div>
          <h3>E-mail*</h3>
          <input
            type="email"
            className="w-full border-2 border-gray-400 my-3 py-2 px-2 rounded-lg"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="mt-4">
          <h3>Password*</h3>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full border-2 border-gray-400 my-3 py-2 px-2 rounded-lg"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
            <span
              className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <CiRead /> : <CiUnread />}
            </span>
          </div>
        </div>

        {/* Re-type Password */}
        <div className="mt-4">
          <h3>Re-Type Password*</h3>
          <div className="relative">
            <input
              type={showRePassword ? "text" : "password"}
              className="w-full border-2 border-gray-400 my-3 py-2 px-2 rounded-lg"
              value={rePassword}
              onChange={(e)=>setRePassword(e.target.value)}
              required
            />
            <span
              className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
              onClick={() => setShowRePassword(!showRePassword)}
            >
              {showRePassword ? <CiRead /> : <CiUnread />}
            </span>
          </div>
        </div>

        <button className="bg-[#015AD8] text-white w-full py-3 rounded-md mt-5">
          Join for free
        </button>

        <div className="w-1/2 mt-5 mx-auto flex items-center justify-between text-gray-400">
          <hr className="w-[40%]" />
          <h3>Or</h3>
          <hr className="w-[40%]" />
        </div>

        <button className="relative border-2 border-[#999999] w-full py-3 rounded-md mt-4">
          <FcGoogle size={25} className="absolute top-3 left-14" />
          Continue with Google
        </button>

        <p className="text-center text-gray-400 mt-4">
          Already on Eduse? <Link to="/login" className="text-[#015AD8] underline">Login</Link>
        </p>
      </section>
    </form>
  );
};

export default SignUp;
