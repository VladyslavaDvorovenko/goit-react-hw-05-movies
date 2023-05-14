import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { getMovieCast } from 'service/api';
import css from './Cast.module.css';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const result = async movieId => {
      const actors = await getMovieCast(movieId);
      setCast(actors);
    };
    result(movieId);
  }, [movieId]);

  return (
    <ul className={css.castList}>
      {cast.map(({ character, name, profile_path }) => {
        return (
          <li key={nanoid()} className={css.castItem}>
            <div className={css.imgBox}>
              {profile_path ? (
                <img
                  className={css.img}
                  src={'https://image.tmdb.org/t/p/w500/' + profile_path}
                  alt={name}
                />
              ) : (
                <div className={css.emptyImg}></div>
              )}
            </div>
            <p className={css.castName}>Name: {name}</p>
            <p className={css.castCharacter}>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};
