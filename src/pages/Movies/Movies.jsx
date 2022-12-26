import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies } from '../../servises/fetchMovies';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { MovieList } from '../../components/MovieList/MovieList';
import toast, { Toaster } from 'react-hot-toast';
import { RotatingLines } from 'react-loader-spinner';

export const Movies = () => {
  const [moviesSearch, setMoviesSearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');
  const [load, setLoad] = useState(false);
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetch = async () => {
      if (query === '') {
        return;
      }

      try {
        setLoad(true);

        const dataMovies = await fetchMovies(
          `https://api.themoviedb.org/3/search/movie?api_key=2a3036180539eed9a276bdc58fa572fc&language=en-US&query=${query}&page=1&include_adult=false`
        );

        const movies = dataMovies.results;

        if (movies.length === 0) {
          toast.error(
            `Sorry, the movies you requested: ${query} not found 😥. `
          );
        }

        setMoviesSearch(movies);
        setInputValue('');
      } catch (error) {
        console.log(error);
      } finally {
        setLoad(false);
      }
    };
    fetch();
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    if (inputValue.trim() === '') {
      toast.error('Fill in the search field');
      return;
    }
    const normalizedValue = event.target.elements.query.value.toLowerCase();
    const nextSearchParams =
      inputValue !== '' ? { query: normalizedValue } : {};
    setSearchParams(nextSearchParams);
  };

  return (
    <>
      <section>
        <div>
          <SearchBox
            handleSubmit={handleSubmit}
            value={inputValue}
            setInputValue={setInputValue}
          />
          <MovieList movies={moviesSearch} />
        </div>
        {load && (
          <RotatingLines
            strokeColor="rgb(11, 127, 171)"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        )}
      </section>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: 'rgb(11, 127, 171)',
            color: '#fff',
          },
        }}
      />
    </>
  );
};
