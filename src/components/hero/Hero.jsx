import css from './Hero.module.css';
import { useState } from "react";
import Modal from '../modal/Modal';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };


    return (
      <section className={css.hero}>
        {showModal && (
          <Modal toggleModal={toggleModal} />
        )}
        <h1 className={css.heroHeader}>
          Make your interior more minimalistic & modern
        </h1>
        <h3 className={css.heroDescr}>
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </h3>
        <button className={css.heroBtn} type="button">
          Contact Us
        </button>
      </section>
    );
};

export default Hero;