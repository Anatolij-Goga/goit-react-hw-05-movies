import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import PropTypes from 'prop-types';
import { MovieLink, MovieList, MovieItem } from './MoviesList.styled';
import { Loader } from 'components/Loader/Loader';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <MovieList>
        {movies.map(({ id, title }) => {
          return (
            <MovieItem key={id}>
              <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </MovieLink>
            </MovieItem>
          );
        })}
      </MovieList>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
