import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { fetchSearchMovies } from 'services/moviesApi';
import { MovieSearchBar } from 'components/MovieSearchBar/MovieSearchBar';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { MoviesContainer } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const nameMovie = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!nameMovie) {
      return;
    }
    setMovies([]);
    setLoading(true);

    fetchSearchMovies(nameMovie)
      .then(responseMovies => {
        setMovies(responseMovies.results);
      })
      .catch(error => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }, [nameMovie]);

  const handelSubmit = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
    console.log(nextParams);
    // setMovies([]);
  };

  return (
    <MoviesContainer>
      {error && <h2>{error.message}</h2>}
      <MovieSearchBar onSubmit={handelSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
      {loading && <Loader />}
      <Toaster duration={1500} position="top-right" reverseOrder={false} />
    </MoviesContainer>
  );
};

export default Movies;
