import { useState, useEffect } from 'react';
import { fetchMovies } from '../../servises/fetchMovies';
import { TrendingMovieList } from '../../components/TrendingMovieList/TrendingMovieList';

export const Home = () => {
  const [moviesTrending, setMoviesTrending] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const dataMovies = await fetchMovies(
          'https://api.themoviedb.org/3/trending/movie/week?api_key=2a3036180539eed9a276bdc58fa572fc'
        );

        const movies = dataMovies.results.map(({ id, original_title }) => ({
          id,
          original_title,
        }));

        setMoviesTrending(movies);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return <TrendingMovieList movies={moviesTrending} />;
};
