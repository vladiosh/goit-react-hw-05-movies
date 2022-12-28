import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { fetchMovies } from '../../servises/fetchMovies';
import { useState, useEffect, Suspense } from 'react';
import { MovieItem } from '../../components/MovieItem/MovieItem';

import { Toaster } from 'react-hot-toast';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      try {
        const dataMovie = await fetchMovies(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=2a3036180539eed9a276bdc58fa572fc&language=en-US`
        );

        setMovie(dataMovie);
      } catch (error) {
        console.log(error.message);
        navigate('/', { replace: true });
      }
    };

    fetch();
  }, [movieId, navigate]);

  if (!movie) {
    return null;
  }

  return (
    <>
      {movie && <MovieItem movie={movie} />}

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
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
