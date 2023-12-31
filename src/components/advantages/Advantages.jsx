import css from "./Advantages.module.css";

const Advantages = () => {
  return (
    <div className="container">
      <section className={css.advantagesContainer}>
        <h2 className={css.advantagesHeader}>Our advantages</h2>
        <ul>
          <li className={css.advantage}>
            <img
              src="./1.jpg"
              alt="Kitchen"
              width="600"
              className={css.advantageImg}
            />
            <div className={css.advantageText}>
              <h3
                style={{
                  marginBottom: 20,
                  color: "#E58411",
                  fontSize: 16,
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
                interiors are made by people who are professionals in their
                fields with an elegant and lucurious style and with premium
                quality materials
              </p>
            </div>
          </li>
          <li className={css.advantage}>
            <img
              src="./1.jpg"
              alt="Kitchen"
              width="600"
              className={css.advantageImg}
            />
            <div className={css.advantageText}>
              <h3
                style={{
                  marginBottom: 20,
                  color: "#E58411",
                  fontSize: 16,
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
    </div>
  );
};

export default Advantages;