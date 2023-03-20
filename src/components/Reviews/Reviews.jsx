import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/moviesApi';
import { Author, Text } from './Reviews.styled';

const Reviews = () => {
  const [movieReviews, setMovieReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId).then(responseMovieReviews => {
      setMovieReview(responseMovieReviews.results);
    });
  }, [movieId]);

  return (
    <>
      {movieReviews > 0 ? (
        movieReviews.map(({ id, author, content }) => {
          return (
            <ul key={id}>
              <Author>{author}</Author>
              <Text>{content}</Text>
            </ul>
          );
        })
      ) : (
        <Text>Sorry, we dont have any reviews for this movie.</Text>
      )}
    </>
  );
};

export default Reviews;
