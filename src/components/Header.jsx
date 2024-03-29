import React from "react";
import logo from "/logo.jpg";
import { useContext } from "react";
import { ModalContext } from "../store/ModalContext";
import { CartContext } from "../store/CartContext";

const Header = () => {
  const { openCart } = useContext(ModalContext);
  const { cart } = useContext(CartContext);

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div id="main-header">
      <div id="title">
        <img src={logo} alt="Logo" />
        <h1>Restaurant</h1>
      </div>
      <button onClick={() => openCart()} className="button">
        Cart
        <span> ({totalQuantity})</span>
      </button>
    </div>
  );
};

export default Header;
