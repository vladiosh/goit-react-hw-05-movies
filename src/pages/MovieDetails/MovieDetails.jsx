import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { fetchMovies } from '../../servises/fetchMovies';
import { useState, useEffect } from 'react';
import { getYear } from 'servises/getYear';
import { getRaiting } from 'servises/getRaiting';
import imageDefault from 'image/defaultImg.jpg';
import {
  DetailsSection,
  Info,
  Name,
  Description,
  Text,
  Genres,
  GenresItem,
  LinkList,
  LinkItem,
  Link,
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
    <>
      {movie && (
        <DetailsSection>
          <div>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : imageDefault
              }
              alt={title}
              width="250px"
              height="375px"
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

            <Text>Additional information</Text>
            <LinkList>
              <LinkItem>
                <Link to="cast">Cast</Link>
              </LinkItem>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </LinkList>
          </Info>
        </DetailsSection>
      )}

      <Outlet />
    </>
  );
};
