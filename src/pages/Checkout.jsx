import React from "react";

export default function Checkout({ cart, removeFromCart, clearCart }) {
  return (
    <div
      className="min-h-screen p-6 relative overflow-hidden"
      style={{
        backgroundImage: "url('/background1.jpg')", // replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay to make text readable */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Checkout</h1>

        {cart.length === 0 ? (
          <p className="text-gray-800">No items in cart.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between border-b py-3">
                <span className="text-gray-900">{item.name} - ${item.price}</span>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              className="mt-6 bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900 transition"
              onClick={clearCart}
            >
              Remove All
            </button>
          </>
        )}
      </div>
    </div>
  );
}
