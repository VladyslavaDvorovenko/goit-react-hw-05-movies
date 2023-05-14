import { useEffect, useState } from 'react';
import { Link, useLocation, useParams, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'service/api';
import { GoBack } from 'components/GoBack/GoBack';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [src, setSrc] = useState('');
  const [title, setTitle] = useState('');
  const [vote, setVote] = useState(0);
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const result = async movieId => {
      const data = await getMovieDetails(movieId);
      helper(data);
    };
    result(movieId);
  }, [movieId]);

  const helper = data => {
    const { poster_path, title, vote_average, overview, genres } = data;
    setSrc('https://image.tmdb.org/t/p/w500/' + poster_path);
    setTitle(title);
    setVote(Math.round((Number(vote_average) * 100) / 10));
    setOverview(overview);
    setGenres(genres.map(el => el.name).join(' '));
  };

  return (
    <>
      <GoBack />
      <div className={css.mainInformation}>
        <div className={css.srcContainer}>
          <img className={css.src} src={src} alt={title} />
        </div>
        <div className={css.mainContainer}>
          <h1 className={css.title}>{title}</h1>
          <p className={css.userScore}>User Score: {vote}%</p>
          <h2 className={css.mainOverview}>Overview</h2>
          <p className={css.overview}>{overview}</p>
          <h3 className={css.mainGenres}>Genres</h3>
          <p className={css.genres}>{genres}</p>
        </div>
      </div>
      <div className={css.additionalInformation}>
        <p className={css.additionalText}>Additional information:</p>
        <ul className={css.additionalList}>
          <li>
            <Link className={css.linkCast} state={location.state} to="cast">
              Cast
            </Link>
          </li>
          <li>
            <Link className={css.linkReview} state={location.state} to="review">
              Review
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
