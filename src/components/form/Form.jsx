import css from "../form/ContactForm.module.css";
import axios from "axios";

// const BASE_URL = "mongodb+srv://iraakulova2019:Svastika-666@cluster0.ia47zme.mongodb.net/";

const ContactForm = () => {
  const handleInputChange = (e) => {
    // switch (e.target.name) {
    //   case "name":
    //     name = e.target.value;
    //     break;

    //   case "number":
    //     number = e.target.value;
    //     break;

    //   default:
    //     return;
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      const form = e.target;
      axios.post();
    
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.contactForm}>
      <label className={css.field}>
        Name
        <br></br>
        <input
          type="text"
          name="name"
        //   value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputChange}
        />
      </label>
      <label className={css.field}>
        Number
        <br></br>
        <input
          type="tel"
          name="number"
        //   value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
