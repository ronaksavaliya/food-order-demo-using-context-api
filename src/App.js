import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/Cart_Provider";
import { useState } from "react";
import "./App.css";

function App() {
  const [showCart, setShowCart] = useState(false);
  const onShowCart = () => {
    setShowCart(true);
  };

  const onCloseCart = () => {
    setShowCart(false);
  };

  return (
    <>
      <CartProvider>
        <div className={showCart ? "blur" : ""}>
          <Header onShowCart={onShowCart} />
          <HeroSection />
          <Meals />
        </div>
        {showCart ? (
          <div className="cart">
            <Cart onCloseCart={onCloseCart} />
          </div>
        ) : null}
      </CartProvider>
    </>
  );
}

export default App;
