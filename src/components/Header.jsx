import React from "react";
import logo from "/logo.jpg";
import { useContext } from "react";
import { ModalContext } from "../store/ModalContext";
import { CartContext } from "../store/CartContext";

const Header = () => {
  const modal = useContext(ModalContext);
  const { cart } = useContext(CartContext);

  function handleOpenModal() {
    modal.handleOpen();
  }
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div id="main-header">
      <div id="title">
        <img src={logo} alt="Logo" />
        <h1>Reactfood</h1>
      </div>
      <button onClick={handleOpenModal} className="button">
        Cart
        <span> ({totalQuantity})</span>
      </button>
    </div>
  );
};

export default Header;
