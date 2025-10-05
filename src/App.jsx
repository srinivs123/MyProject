      import React, { useState } from "react";
      import Navbar from "./components/Navbar";
      import Home from "./pages/Home";
      import Checkout from "./pages/Checkout";
      import Product from "./pages/Product";
      import Contact from "./pages/Contact";
      import About from "./pages/About";
      import Login from "./pages/login";
      import Footer from "./components/Footer";

      function App() {
        const [cart, setCart] = useState([]);
        const [page, setPage] = useState("home");

        const addToCart = (product) => {
          setCart([...cart, product]);
        };

        const removeFromCart = (id) => {
          setCart(cart.filter((item) => item.id !== id));
        };

        const clearCart = () => {
          setCart([]); // Remove all items
        };

        return (
          <div>
            <Navbar cartCount={cart.length} goToPage={setPage} />

            {page === "home" && <Home/>}
            {page === "checkout" && (
              <Checkout
                cart={cart}
                removeFromCart={removeFromCart}
                clearCart={clearCart} // ✅ pass down Remove All
              />
            )}
            {page === "product" && <Product addToCart={addToCart} />}
            {page === "contact" && <Contact />}
            {page === "login" && <Login />}
            {page === "about" && <About />}

            <Footer />
          </div>
        );
      }

      export default App;
