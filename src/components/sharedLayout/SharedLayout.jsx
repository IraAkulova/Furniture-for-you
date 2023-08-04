import { Outlet, NavLink } from "react-router-dom";
import { Suspense, useState } from "react";
import Loader from "../../components/loader/Loader";
import MobileMenu from "../mobileMenu/MobileMenu";
import css from "./SharedLayout.module.css";

const SharedLayout = () => {
  const [showMenu, setShowMenu] = useState(false);
  const openMenuBtn = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className={css.sharedLayout}>
      <div className={css.sharedHeader}>
        {!showMenu && (
          <button
            type="button"
            onClick={openMenuBtn}
            className={css.burgerMenuBtn}
          >
            <svg width="40" height="40" aria-label="Перемикач мобільного меню">
              <use href="./menu.svg#icon-menu"></use>
            </svg>
          </button>
        )}
        {showMenu && (
          <MobileMenu openMenuBtn={openMenuBtn} showMenu={showMenu} />
        )}
        <nav className={css.navigation}>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
          <NavLink to="/portfolio" className={css.link}>
            Portfolio
          </NavLink>
          <NavLink to="/contacts" className={css.link}>
            Contacts
          </NavLink>
        </nav>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <div className={css.footer}>
        <p>Copyright © 2023</p>
        <div className={css.social}>
          <p>Follow us:</p>
          <ul className={css.socialItems}>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <svg className={css.socialIcon}>
                  <use href="./icons.svg#icon-instagram"></use>
                </svg>
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <svg className={css.socialIcon}>
                  <use href="./icons.svg#icon-facebook"></use>
                </svg>
                <span>Facebook</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SharedLayout;
