import React from "react";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-sm p-8">

        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Place<span className="text-blue-600">Wise</span>
          </h1>

          <p className="text-slate-500 mt-2">
            Welcome back! Continue your placement journey.
          </p>
        </div>

        {/* Email */}
        <div className="relative">
          <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-slate-200 rounded-lg py-3 pl-10 pr-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Password */}
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full border border-slate-200 rounded-lg py-3 px-4 mt-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />

        {/* Forgot Password */}
        <div className="text-right mt-2">
          <Link
            to="/forgot-password"
            className="text-sm text-blue-600 hover:text-blue-700"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login */}
        <button
          onClick={() => navigate("/dashboard")}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium mt-5 transition"
        >
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="h-px bg-slate-200 flex-1"></div>

          <span className="text-sm text-slate-400">OR</span>

          <div className="h-px bg-slate-200 flex-1"></div>
        </div>

        {/* Google */}
        <button className="w-full border border-slate-200 hover:bg-slate-50 py-3 rounded-lg flex items-center justify-center gap-3 font-medium text-slate-700 transition">
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>

        {/* Signup */}
        <p className="text-center text-sm text-slate-500 mt-7">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-medium hover:text-blue-700"
          >
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;