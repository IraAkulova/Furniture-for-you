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
        <p>Social Networks</p>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
        </ul>
      </div>
    </>
  );
};

export default SharedLayout;
