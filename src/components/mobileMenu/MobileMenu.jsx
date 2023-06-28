import { NavLink } from "react-router-dom";

const MobileMenu = () => {
    
  return (
    <>
      <button
        type="button"
        className="header-nav__button js-open-menu"
        aria-expanded="false"
        aria-controls="mobile-menu"
        js-open-menu
      >
        <svg width="40" height="40" aria-label="Перемикач мобільного меню">
          <use class="header-nav__menu" href="./menu.svg#icon-menu"></use>
        </svg>
      </button>
      <div className="menu-container js-menu-container">
        <button type="button" class="menu-toggler js-close-menu">
          <svg width="40" height="40" aria-label="Перемикач мобільного меню">
            <use
              class="header-nav__cross"
              href="./menu.svg#icon-close-menu"
            ></use>
          </svg>
        </button>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <ul class="mobile-social">
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
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
