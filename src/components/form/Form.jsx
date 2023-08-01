import css from "../form/Form.module.css";
import { useState } from "react";
import axios from "axios";
import Notiflix from "notiflix";
import "notiflix/dist/notiflix-3.2.6.min.css";

axios.defaults.baseURL = "https://furniture4u.onrender.com";

const ContactForm = ({ toggleModal }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleInputChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;

      case "phone":
        setPhone(e.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/contacts", { name, phone });
          setName("");
          setPhone("");
          Notiflix.Notify.success(`We will contact you soon.`);
          toggleModal();
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        Name
        <br></br>
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputChange}
          className={css.field}
          placeholder="Type your name"
        />
      </label>
      <label className={css.label}>
        Number
        <br></br>
        <input
          type="tel"
          name="phone"
          value={phone}
          // pattern="/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInputChange}
          className={css.field}
          placeholder="Type your phone number"
        />
      </label>
      <button type="submit" className={css.submBtn}>
        Contact me
      </button>
    </form>
  );
};

export default ContactForm;
