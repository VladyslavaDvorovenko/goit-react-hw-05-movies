import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Header.module.css';

export const Header = () => {
  return (
    <>
      <div className={css.header}>
        <nav className={css.nav}>
          <Link className={css.link} to="/">
            Home
          </Link>
          <Link className={css.link} to="movies">
            Movies
          </Link>
        </nav>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
