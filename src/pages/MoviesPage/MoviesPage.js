import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'service/api';
import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const getMoviesByQuery = async () => {
      const result = await getMovieByQuery(searchQuery);
      setMovies(result);
    };
    getMoviesByQuery();
  }, [searchQuery]);

  const onInputChange = event => {
    setQuery(event.currentTarget.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    setSearchParams({ query });
  };

  return (
    <div>
      <form className={css.formOnSubmit} onSubmit={onSubmit}>
        <input
          className={css.inputSubmit}
          type="text"
          name="query"
          value={query}
          onChange={onInputChange}
        />
        <button className={css.button} type="submit">
          Submit
        </button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
