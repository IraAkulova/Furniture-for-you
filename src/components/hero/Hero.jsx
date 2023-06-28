import css from './Hero.module.css';

const Hero = () => {
    return (
        <section className={css.hero}>
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