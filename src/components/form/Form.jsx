import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import css from "../form/Form.module.css";

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
      toast.success(`We will contact you soon.`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
          pattern="[a-zA-Zа-яА-ЯіІґҐїЇєЄ]+(([' \-][a-zA-Zа-яА-ЯіІґҐїЇєЄ ])?[a-zA-Zа-яА-ЯіІґҐїЇєЄ]*)*"
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
          pattern="([\+38]?[0-9]){10,13}"
          title="Phone number must be 10 digits without spaces, dashes, parentheses, may start with +38"
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
