import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import css from './SharedLayout.module.css';
import Loader from '../../components/loader/Loader';
import Button from '../button/Button';

const SharedLayout = () => {
  return (
    <>
      <div className={css.sharedHeader}>
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
        <ul className={css.authBtns}>
          <li>
            <Button text={"Register"} />
          </li>
          <li>
            <Button text={"Login"} />
          </li>
        </ul>
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
    </>
  );
};

export default SharedLayout;
