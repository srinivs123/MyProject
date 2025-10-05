import React, { useState } from "react";

export default function Navbar({ cartCount, goToPage }) {
  const [activePage, setActivePage] = useState("home");

  const handleClick = (page) => {
    setActivePage(page);
    goToPage(page);
  };

  return (
    <nav
      className="p-4 flex justify-between items-center text-white"
      style={{
        backgroundColor:"black",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Logo and Store Name */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => handleClick("home")}
      >
        <img
          src="/logo1.png"
          alt="Logo"
          className="h-20 w-20 object-contain"
        />
        <span className="text-xl font-bold text-gray-200">My Store</span>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6">
        {["home", "about", "product", "contact","login"].map((page) => (
          <h1
            key={page}
            className={`font-bold text-xl cursor-pointer pb-1 ${
              activePage === page
                ? "border-b-4 border-red-500"
                : "text-gray-300 hover:text-white"
            }`}
            onClick={() => handleClick(page)}
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </h1>
        ))}
      </div>

      {/* Cart Button */}
      <button
        className="bg-white text-black px-4 py-2 rounded font-bold hover:bg-gray-200 transition"
        onClick={() => handleClick("checkout")}
      >
        Cart ({cartCount})
      </button>
    </nav>
  );
}
