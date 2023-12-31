import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import Modal from "../modal/Modal";
import ReviewForm from "../reviewForm/ReviewForm";

import css from "./Reviewes.module.css";

axios.defaults.baseURL = "https://furniture4u.onrender.com";

const Reviewes = () => {
  const [showModal, setShowModal] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(true);

  useEffect(() => {
    axios
      .get(`/api/reviews?page=${page}&limit=3`)
      .then((response) => {
        setReviews((prevRev) => {
          if (response.data.data.reviews.length === 0) {
            toast.info(`You have seen all reviews.`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setLoadMore(false);
          }
          return [...prevRev, ...response.data.data.reviews]
        });
      })
      .catch((error) => console.log(error.message));
  }, [page]);

    const toggleModal = () => {
      setShowModal(!showModal);
  };
    const buttonClickHandler = () => {
      setPage(page + 1);
  };

  return (
    <section className={css.reviewsContainer}>
      {showModal && (
        <Modal toggleModal={toggleModal}>
          <ReviewForm toggleModal={toggleModal} />
        </Modal>
      )}
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
      <ul className={css.btnsList}>
        <li>
          {loadMore !== false && (
            <button
              type="button"
              className={css.reviewBtn}
              onClick={buttonClickHandler}
            >
              More reviews
            </button>
          )}
        </li>
        <li>
          <button
            type="button"
            className={css.reviewBtn}
            onClick={() => {
              setShowModal(true);
            }}
          >
            Add Review
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Reviewes;
