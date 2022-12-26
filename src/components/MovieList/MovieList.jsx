import { FilmLink, Item, List } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  return (
    <List>
      {movies.map(movie => (
        <Item key={movie.id}>
          <FilmLink to={`${movie.id}`}>{movie.title}</FilmLink>
        </Item>
      ))}
    </List>
  );
};
