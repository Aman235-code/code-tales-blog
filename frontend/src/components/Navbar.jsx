import React, { useState, useEffect } from "react";
import { FaMoon, FaSun, FaSearch } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    NProgress.start();
    NProgress.done();
  }, [location]);

  const handleNavigateHome = () => {
    if (location.pathname !== "/") {
      NProgress.start();
      navigate("/");
    }
  };

  const navbarStyles = darkMode ? "bg-black text-white" : "bg-white text-black";

  const borderColor = darkMode ? "border-white" : "border-black";
  const inputBg = darkMode ? "bg-gray-800" : "bg-gray-100";
  const inputText = darkMode ? "text-white" : "text-black";
  const placeholderColor = darkMode
    ? "placeholder-gray-400"
    : "placeholder-gray-500";
  const hoverTextColor = darkMode
    ? "hover:text-indigo-400"
    : "hover:text-indigo-600";

  return (
    <nav
      className={`${navbarStyles} shadow-md px-6 py-4 sticky top-0 z-50 font-sans transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap">
        {/* Left: Logo + Home */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleNavigateHome}
            className={`text-2xl font-bold tracking-tight transition ${hoverTextColor}`}
          >
            &lt;/&gt; Code Tales
          </button>

          <button
            onClick={handleNavigateHome}
            className={`relative text-[18px] px-3 py-1.5 rounded hover:cursor-pointer transition ${inputText}
              after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
              after:h-[2px] after:bg-red-500 after:w-0 hover:after:w-full
              after:origin-center after:transition-all after:duration-300`}
          >
            Home
          </button>
        </div>

        {/* Right: Search, Theme, Auth */}
        <div className="flex items-center gap-4 flex-wrap mt-4 sm:mt-0">
          {/* Search */}
          <div
            className={`flex items-center px-3 py-1.5 rounded-md ${inputBg}`}
          >
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className={`bg-transparent focus:outline-none text-sm w-44 sm:w-64 ${inputText} ${placeholderColor}`}
            />
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`transition ${inputText} ${hoverTextColor}`}
            title="Toggle theme"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>

          {/* Auth Buttons */}
          <Link
            to="/login"
            className={`px-4 py-1.5 text-sm rounded-md border ${borderColor} ${inputText} hover:bg-gray-200 transition`}
          >
            Login
          </Link>
          <Link
            to="/register"
            className={`px-4 py-1.5 text-sm rounded-md ${
              darkMode
                ? "bg-white text-black hover:bg-gray-300"
                : "bg-black text-white hover:bg-gray-800"
            } transition`}
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
