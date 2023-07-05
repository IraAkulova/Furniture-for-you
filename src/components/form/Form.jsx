import css from "../form/ContactForm.module.css";
import axios from "axios";

axios.defaults.baseURL = "https://furniture4u.onrender.com";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
      try {
        const response = await axios.post("/contacts", {
          name: form.name,
          phone: form.phone,
        });
      return response.data;
      } catch (error) {
        console.log(error);
      };
    
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
          name="phone"
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
