import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, styles, onClose, open }) => {
  const dialog = useRef();

  useEffect(() => {
    if (!open) {
      return;
    }

    console.log("setup code", open);
    dialog.current.showModal();

    return () => {
      console.log("cleanup code", open);
      dialog.current.close();
    };
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${styles}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
