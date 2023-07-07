import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import ReviewForm from "../reviewForm/ReviewForm";
import css from "../reviewModal/ReviewModal.module.css"

const revModalRoot = document.querySelector("#review-modal");

const ReviewModal = ({ toggleModal }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        toggleModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      return window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleModal]);

  const handleOverlayClick = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    toggleModal();
  };

  return createPortal(
    <div className={css.overlay} onClick={handleOverlayClick}>
      <div className={css.modal}>
        <ReviewForm />
      </div>
    </div>,
    revModalRoot
  );
};

export default ReviewModal;
