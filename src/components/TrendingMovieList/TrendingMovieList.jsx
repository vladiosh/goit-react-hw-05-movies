import React from 'react';
import { Link } from 'react-router-dom';

export const TrendingMovieList = ({ movies }) => {
  return (
    <>
      <h1>Trending today</h1>

      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, original_title }) => {
            return (
              <li key={id}>
                <Link to={`${id}`}>{original_title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
