import { useState } from "react";
import Modal from '../modal/Modal';
import ContactForm from "../form/Form";
import css from "./Hero.module.css";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };


    return (
      <section className={css.hero}>
        {showModal && (
          <Modal toggleModal={toggleModal}>
            <ContactForm toggleModal={toggleModal} />
          </Modal>
        )}
        <h1 className={css.heroHeader}>
          Make your interior more minimalistic & modern
        </h1>
        <h3 className={css.heroDescr}>
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </h3>
        <button
          className={css.heroBtn}
          type="button"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Contact Us
        </button>
      </section>
    );
};

export default Hero;