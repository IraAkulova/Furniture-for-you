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
          <NavLink to="/">Home</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </div>

        <ul className={css.mobileSocial}>
          <li class="mobile-social__item">
            <a
              class="mobile-social__link"
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
          <li class="mobile-social__item">
            <a
              class="mobile-social__link"
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
