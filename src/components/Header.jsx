import React from "react";
import logo from "/logo.jpg";

const Header = () => {
  return (
    <div id="main-header">
      <div id="title">
        <img src={logo} alt="Logo" />
        <h1>Reactfood</h1>
      </div>
      <button className="button">Cart</button>
    </div>
  );
};

export default Header;
