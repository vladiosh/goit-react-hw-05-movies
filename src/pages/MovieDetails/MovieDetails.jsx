import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { fetchMovies } from '../../servises/fetchMovies';
import { useState, useEffect } from 'react';
import { MovieItem } from '../../components/MovieItem/MovieItem';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const dataMovie = await fetchMovies(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=2a3036180539eed9a276bdc58fa572fc&language=en-US`
        );

        setMovie(dataMovie);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetch();
  }, [movieId]);

  if (!movie) {
    return null;
  }

  return (
    <>
      {movie && <MovieItem movie={movie} />}
      <Outlet />
    </>
  );
};
