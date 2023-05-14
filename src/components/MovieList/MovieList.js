import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.movieList}>
      {movies &&
        movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link
                className={css.movieListLink}
                state={{ from: location }}
                to={`/movies/${movie.id}`}
              >
                <span>{movie.title}</span>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};
