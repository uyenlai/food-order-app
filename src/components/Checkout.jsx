import React, { useState } from "react";
import Modal from "./Modal.jsx";
import { Input } from "./Input.jsx";
import { CartContext } from "../store/CartContext";
import { useContext } from "react";
import { ModalContext } from "../store/ModalContext";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const modal = useContext(ModalContext);
  const [isSending, setIsSending] = useState(false);

  const total = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function handleCloseCheckout() {
    modal.hideCheckout();
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const array = [];
    for (const pair of formData) {
      array.push(pair);
    }

    const data = Object.fromEntries(array);

    const sendingOrder = async () => {
      setIsSending(true);
      const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order: {
            items: cart,
            customer: data,
          },
        }),
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      setIsSending(false);
    };
    sendingOrder();
  }

  return (
    <Modal open={modal.type === "checkout"}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {total}</p>
        <Input label="Full Name" id="name" name="name" type="text" />
        <Input label="E-mail" id="email" name="email" type="email" />
        <Input label="Address" id="street" name="street" type="text" />
        <div className="control-row">
          <Input
            label="Postal Code"
            id="postal"
            name={["postal-code"]}
            type="text"
          />
          <Input label="City" id="city" name="city" type="text" />
        </div>
        <p className="modal-actions">
          <button
            className="button text-button"
            type="button"
            onClick={handleCloseCheckout}
          >
            Close
          </button>
          <button className="button">
            {isSending ? "Sending..." : "Submit Order"}
          </button>
        </p>
      </form>
    </Modal>
  );
};

export default Checkout;
