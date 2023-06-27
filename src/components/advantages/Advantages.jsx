import css from "./Advantages.module.css";

const Advantages = () => {
  return (
    <section className={css.advantagesContainer}>
      <h2 className={css.advantagesHeader}>Our advantages</h2>
      <ul>
        <li>
          <img
            src="./1.jpg"
            alt="Kitchen"
            width="370"
            height="294"
            className={css.advantageImg}
          />
          <div className={css.advantageText}>
            <h3
              style={{
                color: "#E58411",
                fontSize: 12,
                fontWeight: 400,
                textTransform: "uppercase",
              }}
            >
              Experiences
            </h3>
            <h4 className={css.advantageTitle}>
              We provide you the best experience
            </h4>
            <p className={css.advantageDescr}>
              You don’t have to worry about the result because all of these
              interiors are made by people who are professionals in their fields
              with an elegant and lucurious style and with premium quality
              materials
            </p>
          </div>
        </li>
        <li>
          <img
            src="./1.jpg"
            alt="Kitchen"
            width="370"
            height="294"
            className={css.advantageImg}
          />
          <div className={css.advantageText}>
            <h3
              style={{
                color: "#E58411",
                fontSize: 12,
                fontWeight: 400,
                textTransform: "uppercase",
              }}
            >
              Materials
            </h3>
            <h4 className={css.advantageTitle}>
              Very serious materials for making furniture
            </h4>
            <p className={css.advantageDescr}>
              Because panto was very serious about designing furniture for our
              environment, using a very expensive and famous capital but at a
              relatively low price
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Advantages;