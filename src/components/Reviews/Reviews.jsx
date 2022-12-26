import { fetchMovies } from '../../servises/fetchMovies';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewList } from '../ReviewList/ReviewList';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const dataMovie = await fetchMovies(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=2a3036180539eed9a276bdc58fa572fc&language=en-US&page=1`
        );

        const reviews = dataMovie.results.map(({ id, author, content }) => ({
          id,
          author,
          content,
        }));

        setReviews(reviews);
      } catch (error) {
        console.log(error.message);
        setError(error);
      }
    };

    fetch();
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ReviewList reviews={reviews} />
      ) : (
        <div>No reviews</div>
      )}
    </>
  );
};
