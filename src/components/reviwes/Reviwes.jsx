import css from "./Reviwes.module.css";

const Reviwes = () => {
  return (
    <section className={css.reviwesContainer}>
      <h2 className={css.reviwesHeader}>Our Client Reviews</h2>
      <ul className={css.reviwes}>
        <li className={css.reviweCard}>
          <img src="./photo1.jpg" alt="Smiling man" width="250" />
          <h6 className={css.name}>Bang Upin</h6>
          <p className={css.reviwe}>
            Bang Upin Pedagang Asongan “Terimakasih banyak, kini ruanganku
            menjadi lebih mewah dan terlihat mahal“
          </p>
          <span>Stars</span>
        </li>
        <li className={css.reviweCard}>
          <img src="./photo2.jpg" alt="Girl" width="250" />
          <h6 className={css.name}>Bang Upin</h6>
          <p className={css.reviwe}>
            Bang Upin Pedagang Asongan “Terimakasih banyak, kini ruanganku
            menjadi lebih mewah dan terlihat mahal“
          </p>
          <span>Stars</span>
        </li>
        <li className={css.reviweCard}>
          <img src="./photo3.jpg" alt="Man" width="250" />
          <h6 className={css.name}>Ibuk Sukijan</h6>
          <p className={css.reviwe}>
            “Makasih Panto, aku sekarang berasa tinggal di apartment karena
            barang-barang yang terlihat mewah“
          </p>
          <span>Stars</span>
        </li>
        <li className={css.reviweCard}>
          <img src="./photo4.jpg" alt="Man in glasses" width="250" />
          <h6 className={css.name}>Mpok Ina</h6>
          <p className={css.reviwe}>
            “Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“
          </p>
          <span>Stars</span>
        </li>
      </ul>
    </section>
  );
};

export default Reviwes;
