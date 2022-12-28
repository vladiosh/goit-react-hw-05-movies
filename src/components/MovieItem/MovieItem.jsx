import PropTypes from 'prop-types';
import { getYear } from 'servises/getYear';
import { getRaiting } from 'servises/getRaiting';
import imageDefault from 'image/defaultImg.jpg';
import { useLocation } from 'react-router-dom';

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
  LinkMovie,
  BtnGoBack,
} from './MovieItem.styled';

export const MovieItem = ({ movie }) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  const { title, release_date, overview, genres, vote_average, poster_path } =
    movie;

  return (
    <DetailsSection>
      <div>
        <BtnGoBack to={backLinkHref}>Go back</BtnGoBack>
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
            <LinkMovie to="cast">Cast</LinkMovie>
          </LinkItem>
          <li>
            <LinkMovie to="reviews">Reviews</LinkMovie>
          </li>
        </LinkList>
      </Info>
    </DetailsSection>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};
