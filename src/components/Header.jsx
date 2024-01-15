import React from "react";
import logo from "/logo.jpg";
import { useContext } from "react";
import { ModalContext } from "../store/ModalContext";

const Header = () => {
  const modal = useContext(ModalContext);
  function handleOpenModal() {
    modal.handleOpen();
  }

  return (
    <div id="main-header">
      <div id="title">
        <img src={logo} alt="Logo" />
        <h1>Reactfood</h1>
      </div>
      <button onClick={handleOpenModal} className="button">
        Cart
      </button>
    </div>
  );
};

export default Header;
