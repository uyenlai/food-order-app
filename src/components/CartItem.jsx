import React from "react";

const CartItem = ({ item, handleDecrease, handleIncrease }) => {
  return (
    <li className="cart-item">
      <p>
        {item.name} - {item.quantity}
      </p>
      <p className="cart-item-actions">
        <button onClick={handleDecrease}>-</button>
        <span>{item.quantity}</span>
        <button onClick={handleIncrease}>+</button>
      </p>
    </li>
  );
};

export default CartItem;
