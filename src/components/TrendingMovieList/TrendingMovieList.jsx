import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Text, FilmLink, TrendItem } from './TrendingMovieList.styled';

export const TrendingMovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <section>
      <Text>Trending today</Text>

      {movies.length > 0 && (
        <ul>
          {movies.map(movie => {
            return (
              <TrendItem key={movie.id}>
                <FilmLink to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.original_title}
                </FilmLink>
              </TrendItem>
            );
          })}
        </ul>
      )}
    </section>
  );
};

TrendingMovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
