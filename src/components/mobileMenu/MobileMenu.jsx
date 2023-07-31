import { NavLink } from "react-router-dom";
import css from "./MobileMenu.module.css"

const MobileMenu = ({ openMenuBtn }) => {

  return (
    <>
      <div className={css.menuContainer}>
        <button
          type="button"
          onClick={openMenuBtn}
          className={css.closeMenuBtn}
        >
          <svg width="40" height="40" aria-label="Перемикач мобільного меню">
            <use
              className={css.iconCross}
              href="./menu.svg#icon-close-menu"
            ></use>
          </svg>
        </button>
        <div className={css.mobileNav}>
          <NavLink to="/" onClick={openMenuBtn}>
            Home
          </NavLink>
          <NavLink to="/portfolio" onClick={openMenuBtn}>
            Portfolio
          </NavLink>
          <NavLink to="/contacts" onClick={openMenuBtn}>
            Contacts
          </NavLink>
        </div>

        <ul className={css.mobileSocial}>
          <li>
            <a
              
              href="https://www.instagram.com/"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              <svg className={css.mobileMenuSocialIcon}>
                <use href="./icons.svg#icon-instagram"></use>
              </svg>
              Instagram
            </a>
          </li>
          <li >
            <a
              
              href="https://www.facebook.com/"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              <svg className={css.mobileMenuSocialIcon}>
                <use href="./icons.svg#icon-facebook"></use>
              </svg>
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
