import { createContext, useState } from "react";

export const ModalContext = createContext();

export default function ModalProvider({ children }) {
  const [open, setOpen] = useState(false);

  const value = {
    open,
    handleToggleCartModal: function () {
      setOpen(!open);
    },
  };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}
