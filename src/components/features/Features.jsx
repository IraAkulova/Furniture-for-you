import css from "./Features.module.css";

const Features = () => {
    return (
      <section className={css.featuresContainer}>
        <h2 className={css.featuresHeader}>Why Choosing Us</h2>
        <ul className={css.features}>
          <li className={css.feature}>
            <h4 className={css.featureTitle}>Luxury facilities</h4>
            <p className={css.featureDesc}>
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
          </li>
          <li className={css.feature}>
            <h4 className={css.featureTitle}>Affordable Price</h4>
            <p className={css.featureDesc}>
              You can get a workspace of the highst quality at an affordable
              price and still enjoy the facilities that are oly here.
            </p>
          </li>
          <li className={css.feature}>
            <h4 className={css.featureTitle}>Many Choices</h4>
            <p className={css.featureDesc}>
              We provide many unique work space choices so that you can choose
              the workspace to your liking.
            </p>
          </li>
        </ul>
      </section>
    );
};

export default Features;