import { useState, useEffect } from 'react';
import { fetchMovies } from '../../servises/fetchMovies';
import { TrendingMovieList } from '../../components/TrendingMovieList/TrendingMovieList';
import { RotatingLines } from 'react-loader-spinner';

export const Home = () => {
  const [moviesTrending, setMoviesTrending] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setLoad(true);
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
      } finally {
        setLoad(false);
      }
    };
    fetch();
  }, []);

  return (
    <>
      <TrendingMovieList movies={moviesTrending} />{' '}
      {load && (
        <RotatingLines
          strokeColor="rgb(11, 127, 171)"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}
    </>
  );
};
