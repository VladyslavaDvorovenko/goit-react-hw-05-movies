import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../service/api';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getMovieByQuery = async () => {
      const result = await getTrendingMovies();
      setTrendingMovies(result);
    };
    getMovieByQuery();
  }, []);

  return <MovieList movies={trendingMovies} />;
};

export default HomePage;
