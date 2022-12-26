import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { fetchMovies } from '../../servises/fetchMovies';
import { useState, useEffect } from 'react';
import { MovieItem } from '../../components/MovieItem/MovieItem';
import { RotatingLines } from 'react-loader-spinner';
import { Toaster } from 'react-hot-toast';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [load, setLoad] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoad(true);
        const dataMovie = await fetchMovies(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=2a3036180539eed9a276bdc58fa572fc&language=en-US`
        );

        setMovie(dataMovie);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoad(false);
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
      {load && (
        <RotatingLines
          strokeColor="rgb(11, 127, 171)"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: 'rgb(11, 127, 171)',
            color: '#fff',
          },
        }}
      />
      <Outlet />
    </>
  );
};
