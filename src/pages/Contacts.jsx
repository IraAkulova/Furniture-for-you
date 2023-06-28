/* eslint-disable jsx-a11y/iframe-has-title */
import css from "./Contacts.module.css"

const Contacts = () => {
  return (
    <address className={css.contactsContainer}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40943.98521778999!2d24.311619862274046!3d50.10502426243619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472532b5ea1f35af%3A0x4872baad1d0cd1b2!2z0JrQsNC8J9GP0L3QutCwLdCR0YPQt9GM0LrQsCwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA4MDQwMA!5e0!3m2!1suk!2sua!4v1687942848348!5m2!1suk!2sua"
        width="600"
        height="450"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <ul className={css.contactsTitles}>
        <li>Наша адреса:</li>
        <li>Email:</li>
        <li>Телефон:</li>
      </ul>
      <ul className={css.contacts}>
        <li className={css.contact}>
          <a
            href="https://www.google.com/maps/place/%D0%9A%D0%B0%D0%BC'%D1%8F%D0%BD%D0%BA%D0%B0-%D0%91%D1%83%D0%B7%D1%8C%D0%BA%D0%B0,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+80400/@50.1050243,24.3116199,13z/data=!3m1!4b1!4m6!3m5!1s0x472532b5ea1f35af:0x4872baad1d0cd1b2!8m2!3d50.0994726!4d24.3454482!16zL20vMGNnajRu?entry=ttu"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            м. Кам'янка-Бузька
          </a>
        </li>
        <li className={css.contact}>
          <a href="mailto:info@devstudio.com">info@furniture4u.com</a>
        </li>
        <li className={css.contact}>
          <a href="tel:+380961111111">+38 096 111 11 11</a>
        </li>
      </ul>
    </address>
  );
};

export default Contacts;
