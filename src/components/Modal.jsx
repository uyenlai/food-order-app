import React, { useRef } from "react";
import { createPortal } from "react-dom";
import { useContext } from "react";
import { ModalContext } from "../store/ModalContext";

const Modal = ({ children, styles }) => {
  const dialog = useRef();
  const modal = useContext(ModalContext);
  const isOpen = modal.open;
  if (isOpen) {
    dialog.current.showModal();
  }

  return createPortal(
    <dialog ref={dialog} className={`modal ${styles}`}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
