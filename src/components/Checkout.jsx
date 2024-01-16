import React from "react";
import Modal from "./Modal.jsx";
import { Input } from "./Input.jsx";

const Checkout = () => {
  return (
    <Modal>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: 20$</p>
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
