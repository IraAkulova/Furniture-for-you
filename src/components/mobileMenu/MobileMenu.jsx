import { NavLink } from "react-router-dom";
import css from "./MobileMenu.module.css"

const MobileMenu = ({ toggleMenu }) => {

  return (
    <>
      <div className={css.menuContainer}>
        <button type="button" onClick={toggleMenu}>
          <svg width="40" height="40" aria-label="Перемикач мобільного меню">
            <use
              className={css.iconCross}
              href="./menu.svg#icon-close-menu"
            ></use>
          </svg>
        </button>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        {/* <ul class="mobile-social">
          <li class="mobile-social__item">
            <a
              class="mobile-social__link"
              href="https://www.instagram.com/"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              Instagram
            </a>
          </li>
          <li class="mobile-social__item">
            <a
              class="mobile-social__link"
              href="https://www.facebook.com/"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              Facebook
            </a>
          </li>
        </ul> */}
      </div>
    </>
  );
};

export default MobileMenu;
