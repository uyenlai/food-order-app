import React, { useState } from "react";
import Modal from "./Modal.jsx";
import { Input } from "./Input.jsx";
import { CartContext } from "../store/CartContext";
import { useContext } from "react";
import { ModalContext } from "../store/ModalContext";
import { formatCurrency } from "../util/formatCurrency";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const modal = useContext(ModalContext);
  const [isSending, setIsSending] = useState(false);
  const [didSend, setDidSend] = useState(false);

  const total = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const formattedTotal = formatCurrency(total.toFixed(2));

  function handleCloseCheckout() {
    modal.hideCheckout();
    setDidSend(false);
  }

  function handleCloseSent() {
    modal.hideCheckout();
    clearCart();
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const array = [];
    for (const pair of formData) {
      array.push(pair);
    }

    const data = Object.fromEntries(array);

    try {
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
      setDidSend(true);
    } catch (error) {
      console.error(error);
    }
  }

  const modalContent = (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {formattedTotal}</p>
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
    </>
  );

  return (
    <Modal open={modal.type === "checkout"}>
      {!didSend && !isSending && modalContent}
      {didSend && !isSending && (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <p>Successfully sent your order!</p>
          <p>
            <button className="button" type="button" onClick={handleCloseSent}>
              Close
            </button>
          </p>
        </div>
      )}
    </Modal>
  );
};

export default Checkout;
