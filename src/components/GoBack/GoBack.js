import { Link, useLocation } from 'react-router-dom';
import css from './GoBack.module.css';

export const GoBack = () => {
  const location = useLocation();
  return (
    <div className={css.containerGoBack}>
      <Link className={css.goBack} to={location.state?.from ?? '/'}>
        Go back
      </Link>
    </div>
  );
};
