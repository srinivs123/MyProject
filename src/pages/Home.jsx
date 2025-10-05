import React from "react";

export default function Home({ goToPage }) {
  return (
    <div
      className="min-h-screen p-6 space-y-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/background1.jpg')", // replace with your image path
      }}
    >
      {/* Hero Section */}
      <div className="bg-white bg-opacity-80 text-blue-900 rounded-2xl p-10 flex flex-col items-center justify-center text-center shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Store</h1>
        <p className="text-lg mb-6">
          Find the best electronics, fashion, and more at unbeatable prices.
        </p>
        <button
          onClick={() => goToPage("product")}
          className="bg-blue-600 text-white font-bold px-6 py-2 rounded shadow hover:bg-blue-700 transition"
        >
          Shop Now
        </button>

      </div>

      {/* Featured Categories */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-white">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {["Electronics", "Men", "Women", "Kids"].map((category) => (
            <div
              key={category}
              className="p-6 bg-white bg-opacity-80 rounded-lg shadow hover:shadow-lg cursor-pointer transition"
              onClick={() => goToPage("product")}
            >
              <h3 className="font-semibold text-blue-900">{category}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
