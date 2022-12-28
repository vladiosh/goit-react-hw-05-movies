import { fetchMovies } from '../../servises/fetchMovies';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewList } from '../ReviewList/ReviewList';
import { RotatingLines } from 'react-loader-spinner';
import toast from 'react-hot-toast';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [load, setLoad] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      setLoad(true);
      try {
        const dataMovie = await fetchMovies(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=2a3036180539eed9a276bdc58fa572fc&language=en-US&page=1`
        );

        const reviews = dataMovie.results.map(({ id, author, content }) => ({
          id,
          author,
          content,
        }));

        if (reviews.length === 0) {
          toast.error(`No reviews.`);
        }

        setReviews(reviews);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoad(false);
      }
    };

    fetch();
  }, [movieId]);

  return (
    <>
      {load && (
        <RotatingLines
          strokeColor="rgb(11, 127, 171)"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}
      {reviews && <ReviewList reviews={reviews} />}
    </>
  );
};

export default Reviews;
