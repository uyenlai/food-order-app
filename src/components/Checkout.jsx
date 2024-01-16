import React from "react";
import Modal from "./Modal.jsx";
import { Input } from "./Input.jsx";
import { CartContext } from "../store/CartContext";
import { useContext } from "react";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const total = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <Modal>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {total}</p>
        <Input label="Full Name" id="full-name" type="text" required />
        <Input label="E-mail" id="email" type="email" required />
        <Input label="Address" id="address" type="text" required />
        <div className="control-row">
          <Input label="Postal Code" id="postal" type="text" required />
          <Input label="City" id="city" type="text" required />
        </div>
        <p className="modal-actions">
          <button className="button text-button" type="button">
            Close
          </button>
          <button className="button">Submit Order</button>
        </p>
      </form>
    </Modal>
  );
};

export default Checkout;
