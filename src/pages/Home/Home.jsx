import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../services/moviesApi';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { HomeContainer } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchTrendingMovies()
      .then(responseMovies => {
        setMovies(responseMovies.results);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <HomeContainer>
        <h1>Trending today</h1>
        <MoviesList movies={movies} />
        {loading && <Loader />}
      </HomeContainer>
    </>
  );
};

export default Home;
