import React, { useContext } from "react";
import Modal from "./Modal";
import CartItem from "./CartItem";
import { CartContext } from "../store/CartContext";
import { ModalContext } from "../store/ModalContext";

const Cart = () => {
  const { cart, addItem, removeItem } = useContext(CartContext);
  const { open, handleToggleCartModal } = useContext(ModalContext);
  console.log(open);

  const total = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function handleToggleCart() {
    handleToggleCartModal();
  }

  return (
    <Modal className="cart" onClose={open ? handleToggleCart : undefined}>
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
        <button className="button text-button" onClick={handleToggleCart}>
          Close
        </button>
        {cart.length > 0 && <button className="button">Checkout</button>}
      </p>
    </Modal>
  );
};

export default Cart;
