import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { fetchMovies } from '../../servises/fetchMovies';
import { useState, useEffect } from 'react';
import { getDateYear } from 'servises/getYear';
import { getRaiting } from 'servises/getRaiting';
import { DefaultImg } from '../../DefaultImage/DefaultImg';
import {} from './MovieDetails.styled';

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

  if (!movie) {
    return null;
  }

  const { title, release_date, overview, genres, vote_average, poster_path } =
    movie;

  return (
    <div>
      {error && <div>Something went wrong. Try again</div>}
      {movie && (
        <div>
          <img
            src={
              poster_path ? (
                `https://image.tmdb.org/t/p/w500/${poster_path}`
              ) : (
                <DefaultImg />
              )
            }
            alt={title}
            width="250px"
          />
          <h2>
            {release_date ? `${title} (${getDateYear(release_date)})` : title}
          </h2>
          <p>
            {vote_average
              ? `User Score: ${getRaiting(vote_average)}% `
              : 'User Score: no score'}
          </p>
          <h3>Overview:</h3>
          <p>{overview ? overview : 'No overview'}</p>
          <h3>Genres:</h3>
          <ul>
            {genres.map(el => (
              <li key={el.id}>{el.name}</li>
            ))}
          </ul>
        </div>
      )}
      <Outlet />
    </div>
  );
};
