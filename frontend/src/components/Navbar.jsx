import React, { useState, useEffect } from "react";
import { FaMoon, FaSun, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <nav className="bg-white text-black shadow-md px-6 py-4 sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap">
        {/* Left: Brand */}
        <Link to="/" className="text-2xl font-bold tracking-tight">
          &lt;/&gt; Code Tales
        </Link>

        {/* Right: Search, Theme, Buttons */}
        <div className="flex items-center gap-4 flex-wrap mt-4 sm:mt-0">
          {/* Search Bar */}
          <div className="flex items-center bg-gray-100 px-3 py-1.5 rounded-md">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none text-sm text-black w-44 sm:w-64"
            />
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-gray-600 hover:text-indigo-600 transition"
            title="Toggle theme"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>

          {/* Auth Buttons */}
          <Link
            to="/login"
            className="px-4 py-1.5 text-sm rounded-md border border-black text-black hover:bg-gray-100 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-1.5 text-sm rounded-md bg-black text-white hover:bg-gray-800 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
