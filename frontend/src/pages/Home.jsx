import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { BookOpenText, PencilLine } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import codingImage from "../assets/coding2.jpg";

const Home = () => {
  return (
    <>
      {/* 🟩 Hero Section with background image */}
      <div className="relative min-h-screen flex items-center justify-center px-4 py-10 overflow-hidden bg-black">
        <img
          src={codingImage}
          alt="Coding Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10" />

        <div className="max-w-4xl w-full text-center space-y-8 z-20">
          <div className="flex flex-col items-center space-y-2">
            <BookOpenText className="w-14 h-14 text-indigo-300 animate-bounce" />
            <h1 className="text-5xl sm:text-6xl text-white font-light">
              Welcome to <span className="text-indigo-300 font-normal">Code Tales</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl text-white">
              <Typewriter
                words={[
                  "Share your coding journey...",
                  "Read stories from developers...",
                  "Start your blog today 🚀",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>
          </div>

          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Code Tales is where developers become storytellers. Whether you're solving a bug at 2 AM
            or shipping your first project, there's always a story worth sharing.
            Connect. Inspire. Learn. 💻✨
          </p>

          <div className="flex justify-center gap-4 flex-wrap pt-4">
            <button className="flex items-center gap-2 bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-full shadow hover:bg-indigo-100 hover:scale-105 transition duration-300">
              <PencilLine className="w-5 h-5" />
              Start Writing
            </button>
            <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 hover:scale-105 transition duration-300">
              <FaLaptopCode className="w-5 h-5" />
              Browse Blogs
            </button>
          </div>
        </div>
      </div>

      {/* 🟦 Section BELOW the image */}
      <div className="bg-white py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto space-y-14">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Code Tales?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Code Tales isn't just a blog — it's a community. Whether you're a beginner or a pro,
              you can share your coding journey, solve real-world bugs, and connect with passionate
              developers across the globe.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-indigo-50 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">✍️ Write Your Story</h3>
              <p className="text-gray-600">
                Publish personal experiences, tutorials, and deep dives that matter to you.
              </p>
            </div>
            <div className="p-6 bg-yellow-50 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-yellow-700 mb-2">🔍 Discover & Learn</h3>
              <p className="text-gray-600">
                Explore thousands of blogs on web dev, data structures, system design, and more.
              </p>
            </div>
            <div className="p-6 bg-pink-50 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-pink-700 mb-2">🤝 Collaborate</h3>
              <p className="text-gray-600">
                Follow fellow developers, comment on blogs, and grow your network.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center pt-10">
            <p className="text-lg text-gray-800">
              🚀 Ready to become a part of the Code Tales community?
            </p>
            <a
              href="/register"
              className="inline-block mt-4 bg-indigo-600 text-white px-8 py-3 rounded-full text-lg shadow hover:bg-indigo-700 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
