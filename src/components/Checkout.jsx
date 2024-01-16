import React from "react";
import Modal from "./Modal.jsx";
import { Input } from "./Input.jsx";
import { CartContext } from "../store/CartContext";
import { useContext } from "react";
import { ModalContext } from "../store/ModalContext";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const modal = useContext(ModalContext);

  const total = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function handleCloseCheckout() {
    modal.hideCheckout();
  }

  return (
    <Modal open={modal.type === "checkout"}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {total}</p>
        <Input label="Full Name" id="full-name" type="text" />
        <Input label="E-mail" id="email" type="email" />
        <Input label="Address" id="address" type="text" />
        <div className="control-row">
          <Input label="Postal Code" id="postal" type="text" />
          <Input label="City" id="city" type="text" />
        </div>
        <p className="modal-actions">
          <button
            className="button text-button"
            type="button"
            onClick={handleCloseCheckout}
          >
            Close
          </button>
          <button className="button">Submit Order</button>
        </p>
      </form>
    </Modal>
  );
};

export default Checkout;
