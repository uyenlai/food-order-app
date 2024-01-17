import React, { useContext } from "react";
import Modal from "./Modal";
import CartItem from "./CartItem";
import { CartContext } from "../store/CartContext";
import { ModalContext } from "../store/ModalContext";
import { formatCurrency } from "../util/formatCurrency";

const Cart = () => {
  const { cart, addItem, removeItem } = useContext(CartContext);
  const modal = useContext(ModalContext);

  const total = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const formattedTotal = formatCurrency(total.toFixed(2));

  function handleCloseCart() {
    modal.hideCart();
  }

  function handleOpenCheckout() {
    modal.openCheckout();
  }

  return (
    <Modal
      className="cart"
      onClose={modal.type === "cart" ? handleCloseCart : undefined}
      open={modal.type === "cart"}
    >
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
      <p className="cart-total">Total: {formattedTotal}</p>
      <p className="modal-actions">
        <button className="button text-button" onClick={handleCloseCart}>
          Close
        </button>
        {cart.length > 0 && (
          <button className="button" onClick={handleOpenCheckout}>
            Checkout
          </button>
        )}
      </p>
    </Modal>
  );
};
export default Cart;
