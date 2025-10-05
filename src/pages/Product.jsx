import React, { useState } from "react";

function Product({ addToCart }) {
  const categories = {
    Electronics: [
      { id: 1, name: "Camera", price: 499, image: "/products1.png" },
      { id: 2, name: "Tripod", price: 99, image: "/products2.png" },
      { id: 3, name: "Lens", price: 299, image: "/products3.png" },
      { id: 4, name: "Headphones", price: 149, image: "/products4.png" },
      { id: 5, name: "Smartphone", price: 799, image: "/products5.png" },
      { id: 6, name: "Smartwatch", price: 199, image: "/products6.png" },
      { id: 7, name: "Laptop", price: 1200, image: "/products7.png" },
      { id: 8, name: "Tablet", price: 450, image: "/products8.png" },
      { id: 9, name: "Gaming Console", price: 399, image: "/products9.png" },
      { id: 10, name: "Bluetooth Speaker", price: 89, image: "/products10.png" },
    ],
    Mens: [
      { id: 11, name: "Men's T-Shirt", price: 25, image: "/products11.png" },
      { id: 12, name: "Men's Jeans", price: 45, image: "/products12.webp" },
      { id: 13, name: "Men's Jacket", price: 85, image: "/products13.webp" },
      { id: 14, name: "Men's Sneakers", price: 65, image: "/products14.webp" },
      { id: 15, name: "Men's Hoodie", price: 50, image: "/products15.webp" },
      { id: 16, name: "Men's Watch", price: 150, image: "/products16.webp" },
      { id: 17, name: "Men's Sunglasses", price: 70, image: "/products17.webp" },
      { id: 18, name: "Men's Formal Shirt", price: 40, image: "/products18.webp" },
      { id: 19, name: "Men's Shorts", price: 30, image: "/products19.webp" },
      { id: 20, name: "Men's Belt", price: 20, image: "/products20.webp" },
    ],
    Womens: [
      { id: 21, name: "Women's Dress", price: 55, image: "/products21.png" },
      { id: 22, name: "Handbag", price: 70, image: "/products22.png" },
      { id: 23, name: "Women's Shoes", price: 60, image: "/products23.png" },
      { id: 24, name: "Women's Blouse", price: 35, image: "/products24.png" },
      { id: 25, name: "Women's Skirt", price: 40, image: "/products25.png" },
      { id: 26, name: "Women's Scarf", price: 20, image: "/products26.png" },
      { id: 27, name: "Women's Watch", price: 160, image: "/products27.png" },
      { id: 28, name: "Women's Jacket", price: 90, image: "/products28.png" },
      { id: 29, name: "Women's Sandals", price: 45, image: "/products29.png" },
      { id: 30, name: "Women's Sunglasses", price: 75, image: "/products30.png" },
    ],
    Kids: [
      { id: 31, name: "Kids' T-Shirt", price: 20, image: "/products31.jpeg" },
      { id: 32, name: "Kids' Jeans", price: 30, image: "/products32.jpeg" },
      { id: 33, name: "Kids' Sneakers", price: 35, image: "/products33.jpeg" },
      { id: 34, name: "Kids' Hoodie", price: 28, image: "/products34.jpeg" },
      { id: 35, name: "Kids' Shorts", price: 22, image: "/products35.jpeg" },
      { id: 36, name: "Kids' Cap", price: 15, image: "/products36.jpeg" },
      { id: 37, name: "Kids' Jacket", price: 45, image: "/products37.jpeg" },
      { id: 38, name: "Kids' Backpack", price: 40, image: "/products38.jpeg" },
      { id: 39, name: "Kids' Pajamas", price: 25, image: "/products39.jpeg" },
      { id: 40, name: "Kids' Socks (Pack)", price: 10, image: "/products40.jpeg" },
    ],
  };

  const [activeCategory, setActiveCategory] = useState("Electronics");

  return (
    <div
      className="min-h-screen p-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background1.jpg')" }}
    >
      <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-3xl p-6 space-y-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">Products</h1>

        {/* Category Headers */}
        <div className="flex gap-6 mb-6 border-b pb-2 justify-center flex-wrap">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-lg font-semibold pb-1 transition ${
                activeCategory === category
                  ? "text-blue-600 border-b-4 border-red-500"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Active Category Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories[activeCategory].map((product) => (
            <div
              key={product.id}
              className="border rounded p-4 shadow-lg hover:shadow-2xl transition bg-white flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-40 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="mb-2">₹{product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 w-full"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
