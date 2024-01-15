import React, { useContext } from "react";
import Modal from "./Modal";
import CartItem from "./CartItem";
import { CartContext } from "../store/CartContext";
import { ModalContext } from "../store/ModalContext";

const Cart = () => {
  const { cart, addItem, removeItem } = useContext(CartContext);
  const { handleToggleCartModal } = useContext(ModalContext);

  const total = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Modal className="cart">
      <h2>Your cart</h2>
      <ul>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            handleIncrease={() => addItem(item)}
            handleDecrease={() => removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">Total: {total}$</p>
      <p className="modal-actions">
        <button
          className="button text-button"
          onClick={() => handleToggleCartModal()}
        >
          Close
        </button>
        <button className="button">Checkout</button>
      </p>
    </Modal>
  );
};

export default Cart;
