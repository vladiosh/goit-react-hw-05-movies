import { TrendingMovieItem } from '../TrendingMovieItem/TrendingMovieItem';
export const TrendingMovieList = ({ movies }) => {
  return (
    <>
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, original_title }) => {
            return <TrendingMovieItem key={id} name={original_title} />;
          })}
        </ul>
      )}
    </>
  );
};
