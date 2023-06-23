import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import css from './SharedLayout.module.css';
import Loader from '../../components/loader/Loader';

const SharedLayout = () => {
  return (
    <div>
      <nav className={css.navigation}>
        <NavLink to="/" className={css.link}>
          Home
        </NavLink>
        {/* <NavLink to="/movies" className={css.link}>
          Movies
        </NavLink> */}
        <NavLink to="/portfolio" className={css.link}>
          Portfolio
        </NavLink>
        <NavLink to="/contacts" className={css.link}>
          Contacts
        </NavLink>
      </nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
