import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 pt-14 pb-10 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & Intro */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-600">Code Tales</h2>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            Code Tales is a developer blogging platform to share your
            experiences, tutorials, and code stories with the world.
          </p>
          <div className="flex gap-4 mt-4 text-indigo-600">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-indigo-800 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-indigo-800 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-indigo-800 transition" />
            </a>
            <a href="mailto:hello@codetales.com">
              <FaEnvelope className="hover:text-indigo-800 transition" />
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Product</h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <a href="#" className="hover:text-indigo-600">
                Write a Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600">
                Browse Blogs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600">
                Tags & Categories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600">
                Top Authors
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600">
                Editor Tools
              </a>
            </li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Explore</h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <a href="#" className="hover:text-indigo-600">
                JavaScript
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600">
                React
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600">
                Node.js
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600">
                System Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600">
                Career Advice
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <a href="#" className="hover:text-indigo-600">
                Docs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t mt-10 pt-6 text-sm text-center text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Code Tales. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
