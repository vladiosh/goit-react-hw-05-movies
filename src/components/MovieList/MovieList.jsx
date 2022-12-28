import { FilmLink, Item, List } from './MovieList.styled';
import { useLocation } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(movie => (
        <Item key={movie.id}>
          <FilmLink to={`${movie.id}`} state={{ from: location }}>
            {movie.title}
          </FilmLink>
        </Item>
      ))}
    </List>
  );
};
