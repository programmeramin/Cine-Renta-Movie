import React from "react";
import { useState, useContext } from "react";
import Moon from "./assets/icons/moon.svg";
import Logo from "./assets/logo.svg";
import Ring from "./assets/ring.svg";
import ShoppingCart from "./assets/shopping-cart.svg";
import CardDetails from "./cine/CardDetails";

import { MovieContext } from "./context";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { cartData } = useContext(MovieContext);

  console.log(cartData);

  function handleCartShow() {
    setShowCart(true);
  }

  return (
    <>
      <header>
        {showCart && <CardDetails onClose={() => setShowCart(false)} />}

        <nav className="center p-1.5rem flex items-center justify-between space-x-10 py-6">
          <a href="#">
            <img src={Logo} width={139} height={26} alt="" />
          </a>
          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={Ring} width={24} height={24} alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={Moon} width={24} height={24} alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={handleCartShow}
              >
                <img src={ShoppingCart} width={24} height={24} alt="" />

               {cartData.length > 0 && (
                <span>{cartData.length}</span>
               )}

              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
