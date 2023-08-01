import css from "../reviewForm/ReviewForm.module.css";
import { useState } from "react";
import axios from "axios";
import Notiflix from "notiflix";
import "notiflix/dist/notiflix-3.2.6.min.css";

axios.defaults.baseURL = "https://furniture4u.onrender.com";

const ReviewForm = ({toggleModal}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const handleInputChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      case "comment":
        setComment(e.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/reviews", {
        name,
        comment,
        email,
        phone,
      });
      setName("");
      setComment("");
      setPhone("");
      setComment("");
      toggleModal();
      Notiflix.Notify.success(`You added a review.`);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.reviewForm}>
      <label className={css.reviewLabel}>
        Name
        <br></br>
        <input
          type="text"
          name="name"
          value={name}
          //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputChange}
          className={css.reviewField}
          placeholder="Type your name"
        />
      </label>
      <label className={css.reviewLabel}>
        Email
        <br></br>
        <input
          type="email"
          name="email"
          value={email}
          //   pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
          title="Enter valid email"
          required
          onChange={handleInputChange}
          className={css.reviewField}
          placeholder="Type your name"
        />
      </label>
      <label className={css.reviewLabel}>
        Phone
        <br></br>
        <input
          type="tel"
          name="phone"
          value={phone}
          //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInputChange}
          className={css.reviewField}
          placeholder="Type your name"
        />
      </label>
      <label className={css.reviewLabel}>
        Comment
        <br></br>
        <textarea
          type="text"
          name="comment"
          value={comment}
          maxLength="100"
          required
          onChange={handleInputChange}
          className={css.reviewField}
          placeholder="Type comment"
          style={{
            height: 80,
            fontSize: 16,
          }}
        />
      </label>
      <button type="submit" className={css.reviewSubmBtn}>
        Leave a comment
      </button>
    </form>
  );
};

export default ReviewForm;
