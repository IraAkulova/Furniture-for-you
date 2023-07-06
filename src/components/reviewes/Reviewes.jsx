import css from "./Reviewes.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

axios.defaults.baseURL = "https://furniture4u.onrender.com";

const Reviewes = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get("/api/reviews")
      .then((response) => {
        setReviews((prevRev) => [...prevRev, ...response.data.data.reviews]);
      })
      .catch((error) => console.log(error.message));
  }, []);

console.log(reviews);

  return (
    <section className={css.reviewsContainer}>
      <h2 className={css.reviewsHeader}>Our Client Reviews</h2>
      <ul className={css.reviews}>
        {reviews.map(({ _id, name, comment, avatarURL }) => (
          <li className={css.reviewCard} key={_id}>
            <img
              src={avatarURL}
              alt="Genereted avatar"
              width="250"
              className={css.reviewImg}
            />
            <h6 className={css.name}>{name}</h6>
            <p className={css.review}>{comment}</p>
          </li>
        ))}
        <li className={css.reviewCard}>
          <img
            src="./photo2.jpg"
            alt="Girl"
            width="250"
            className={css.reviewImg}
          />
          <h6 className={css.name}>Bang Upin</h6>
          <p className={css.review}>
            Bang Upin Pedagang Asongan “Terimakasih banyak, kini ruanganku
            menjadi lebih mewah dan terlihat mahal“
          </p>
          <div className={css.stars}>Stars</div>
        </li>
        <li className={css.reviewCard}>
          <img
            src="./photo3.jpg"
            alt="Man"
            width="250"
            className={css.reviewImg}
          />
          <h6 className={css.name}>Ibuk Sukijan</h6>
          <p className={css.review}>
            “Makasih Panto, aku sekarang berasa tinggal di apartment karena
            barang-barang yang terlihat mewah“
          </p>
          <div className={css.stars}>Stars</div>
        </li>
        <li className={css.reviewCard}>
          <img
            src="./photo4.jpg"
            alt="Man in glasses"
            width="250"
            className={css.reviewImg}
          />
          <h6 className={css.name}>Mpok Ina</h6>
          <p className={css.review}>
            “Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“
          </p>
          <div className={css.stars}>Stars</div>
        </li>
      </ul>
    </section>
  );
};

export default Reviewes;
