import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from '../modal/Modal.module.css';

const modalRoot = document.querySelector('#modal');

const Modal = ({ toggleModal, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
          return window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

  const handleOverlayClick = e => {
    if (e.target !== e.currentTarget) {
      return;
    }
    toggleModal();
  };

  return createPortal(
    <div className={css.overlay} onClick={handleOverlayClick}>
      <div className={css.modal}>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;