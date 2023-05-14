import { Link, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Cast } from '../pages/Cast/Cast';
import { Reviews } from '../pages/Reviews/Reviews';
import { lazy } from 'react';

const LazyHomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LazyMoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const LazyMovieDetails = lazy(() =>
  import('../pages/MovieDetails/MovieDetails')
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LazyHomePage />} />
        <Route path="movies" element={<LazyMoviesPage />} />
        <Route path="movies/:movieId" element={<LazyMovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Reviews />} />
        </Route>
        <Route
          path="*"
          element={
            <div>
              Sorry, page not found. <Link to="/">Go home</Link>
            </div>
          }
        />
      </Route>
    </Routes>
  );
};
