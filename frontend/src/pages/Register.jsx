import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center px-4">
      <div className="bg-gray-300 text-gray-900 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl text-center text-gray-800 mb-6 font-normal tracking-wide">
          Create your account
        </h2>

        <form className="space-y-5">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 rounded-md bg-gray-100 border border-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="yourusername"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-md bg-gray-100 border border-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded-md bg-gray-100 border border-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="••••••••"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-gray-700 hover:bg-gray-800 transition rounded-md text-white"
          >
            Register
          </button>
        </form>

        {/* Footer */}
        <div className="text-sm text-gray-700 text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-gray-900 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
