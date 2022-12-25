import React from 'react';
import { Link } from 'react-router-dom';

export const TrendingMovieList = ({ movies }) => {
  return (
    <>
      <h1>Trending today</h1>

      {movies.length > 0 && (
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
