import css from "./Reviewes.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import ReviewModal from "../reviewModal/ReviewModal";

axios.defaults.baseURL = "https://furniture4u.onrender.com";

const Reviewes = () => {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [prevRev, setPrevRev] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/reviews?page=${page}&limit=3`)
      .then((response) => {
        setReviews((prevRev) => {setPrevRev([...prevRev]); return [...prevRev, ...response.data.data.reviews]});
      })
      .catch((error) => console.log(error.message));
  }, [page]);

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
      setShowModal(!showModal);
  };
      const buttonClickHandler = () => {
        setPage(page + 1);
      };


  return (
    <section className={css.reviewsContainer}>
      {showModal && <ReviewModal toggleModal={toggleModal} />}
      <h2 className={css.reviewsHeader}>Our Client Reviews</h2>
      <ul className={css.reviews}>
        {reviews.map(({ _id, name, comment, avatarURL }) => (
          <li className={css.reviewCard} key={_id}>
            <img
              src={avatarURL}
              alt="Genereted avatar"
              width="200"
              className={css.reviewImg}
            />
            <h6 className={css.name}>{name}</h6>
            <p className={css.review}>{comment}</p>
          </li>
        ))}
      </ul>
      {prevRev.length !== reviews.length && (
        <button
          type="button"
          className={css.reviewBtn}
          onClick={buttonClickHandler}
        >
          More reviews
        </button>
      )}
      <button
        type="button"
        className={css.reviewBtn}
        onClick={() => {
          setShowModal(true);
        }}
      >
        Add Review
      </button>
    </section>
  );
};

export default Reviewes;
