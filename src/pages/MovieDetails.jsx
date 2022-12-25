import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { fetchMovies } from '../servises/fetchMovies';
import { useState, useEffect } from 'react';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const dataMovie = await fetchMovies(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=2a3036180539eed9a276bdc58fa572fc&language=en-US`
        );

        console.log(dataMovie);

        setMovie(dataMovie);
      } catch (error) {
        console.log(error.message);

        setError(error);
      }
    };

    fetch();
  }, [movieId]);

  return (
    <main>
      {error && <div>Something went wrong. Try again</div>}
      {movie && (
        <div>
          <p>{movie.original_title}</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            sunt excepturi nesciunt iusto dignissimos assumenda ab quae
            cupiditate a, sed reprehenderit? Deleniti optio quasi, amet natus
            reiciendis atque fuga dolore? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Impedit suscipit quisquam incidunt
            commodi fugiat aliquam praesentium ipsum quos unde voluptatum?
          </p>
        </div>
      )}
      <Outlet />
    </main>
  );
};
