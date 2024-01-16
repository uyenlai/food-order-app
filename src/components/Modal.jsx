import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useContext } from "react";
import { ModalContext } from "../store/ModalContext";

const Modal = ({ children, styles, onClose }) => {
  const dialog = useRef();
  const modal = useContext(ModalContext);

  useEffect(() => {
    if (modal.type === "") {
      return;
    }

    console.log("setup code", modal.type);
    dialog.current.showModal();

    return () => {
      console.log("cleanup code", modal.type);
      dialog.current.close();
    };
  }, [modal.type]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${styles}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
