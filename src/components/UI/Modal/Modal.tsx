"use client";

import { useCallback, useEffect } from "react";
import css from "./Modal.module.scss";

type Props = {
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ onClose, children }: Props) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "visible";
    };
  }, [handleKeyDown]);

  return (
    <div className={css.overlay} onClick={onClose}>
      <div
        className={css.modal}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className={css.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={css.modalContent}>{children}</div>
      </div>
    </div>
  );
};
export default Modal;
