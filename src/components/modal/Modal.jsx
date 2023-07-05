import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import ContactForm from '../form/Form'
import css from '../modal/Modal.module.css';

const modalRoot = document.querySelector('#modal');

const Modal = ({ toggleModal }) => {
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
        <ContactForm/>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;