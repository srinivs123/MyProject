import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side */}
        <p className="text-sm">
          © {new Date().getFullYear()} My Store. All rights reserved.
        </p>

        {/* Center Links */}
        <div className="flex space-x-4 my-3 md:my-0">
          <a href="#" className="hover:text-blue-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-400">
            Terms of Service
          </a>
        </div>

        {/* Right Side (Social Media) */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
