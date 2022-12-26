import React from 'react';
import { Text, FilmLink, TrendItem } from './TrendingMovieList.styled';

export const TrendingMovieList = ({ movies }) => {
  return (
    <main>
      <Text>Trending today</Text>

      {movies.length > 0 && (
        <ul>
          {movies.map(movie => {
            return (
              <TrendItem key={movie.id}>
                <FilmLink to={`/movies/${movie.id}`}>
                  {movie.original_title}
                </FilmLink>
              </TrendItem>
            );
          })}
        </ul>
      )}
    </main>
  );
};
