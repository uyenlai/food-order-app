import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useContext } from "react";
import { ModalContext } from "../store/ModalContext";

const Modal = ({ children, styles, onClose }) => {
  const dialog = useRef();
  const { open } = useContext(ModalContext);

  useEffect(() => {
    if (open) {
      console.log("setup code", open);
      dialog.current.showModal();
    } else return;
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
