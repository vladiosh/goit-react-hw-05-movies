import { useState, useEffect } from 'react';

import { fetchTrendingMovies } from '../servises/fetchTrendingMovies';
import { TrendingMovieList } from '../components/TrendingMovieList/TrendingMovieList';

export const Home = () => {
  const [moviesTrending, setMoviesTrending] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMoviesTrending);
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <TrendingMovieList movies={moviesTrending} />
    </main>
  );
};
