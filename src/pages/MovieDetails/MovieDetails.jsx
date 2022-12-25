import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { fetchMovies } from '../../servises/fetchMovies';
import { useState, useEffect } from 'react';
import { getYear } from 'servises/getYear';
import { getRaiting } from 'servises/getRaiting';
import { DefaultImg } from '../../DefaultImage/DefaultImg';
import {
  DetailsSection,
  Info,
  Name,
  Description,
  Text,
  Genres,
  GenresItem,
} from './MovieDetails.styled';

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
    <DetailsSection>
      {error && <div>Something went wrong. Try again</div>}
      {movie && (
        <DetailsSection>
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
          </div>
          <Info>
            <Name>
              {release_date ? `${title} (${getYear(release_date)})` : title}
            </Name>
            <Description>
              {vote_average
                ? `User Score: ${getRaiting(vote_average)}% `
                : 'User Score: no score'}
            </Description>
            <Text>Overview:</Text>
            <Description>{overview ? overview : 'No overview'}</Description>
            <Text>Genres:</Text>
            <Genres>
              {genres.map(el => (
                <GenresItem key={el.id}>{el.name}</GenresItem>
              ))}
            </Genres>
          </Info>
        </DetailsSection>
      )}
      <Outlet />
    </DetailsSection>
  );
};
