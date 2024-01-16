import { createContext, useState } from "react";

export const ModalContext = createContext();

export default function ModalProvider({ children }) {
  const [type, setType] = useState("");

  const value = {
    type,
    openCart: function () {
      setType("cart");
    },
    hideCart: function () {
      setType("");
    },

    openCheckout: function () {
      setType("checkout");
    },
    hideCheckout: function () {
      setType("");
    },
  };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}
