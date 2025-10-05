import React from "react";

export default function About() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat p-10"
      style={{
        backgroundImage: "url('/background1.jpg')", // replace with your image path
      }}
    >
      <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-3xl shadow-lg max-w-5xl mx-auto p-10 space-y-6">
        <h1 className="text-4xl font-bold text-blue-900 mb-4 text-center">
          About Us
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to <span className="font-semibold">My Store</span>! We’re passionate
          about bringing you the best photography gear, electronics, fashion, and
          lifestyle products at affordable prices. Our mission is to empower
          photographers, tech enthusiasts, and fashion lovers alike to explore
          and create with confidence.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          We carefully curate every product we sell, ensuring quality, reliability,
          and style. Our team is dedicated to providing excellent customer support,
          helping you choose the right gear, accessories, or fashion essentials
          to suit your needs.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          From your first camera to advanced professional gear, and from everyday
          fashion to trendy accessories, we make sure you have a smooth and
          enjoyable shopping experience. Explore our collections and discover
          products designed to inspire and enhance your lifestyle.
        </p>

        <p className="text-gray-800 font-semibold text-lg text-center mt-6">
          Thank you for trusting us with your photography, fashion, and lifestyle journey!
        </p>

        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="#"
            className="px-6 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            Explore Products
          </a>
          <a
            href="#"
            className="px-6 py-2 bg-gray-200 text-black rounded-full shadow-lg hover:bg-gray-300 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
