import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { fetchMovies } from '../servises/fetchMovies';

export const Movies = () => {
  const [moviesSearch, setMoviesSearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetch = async () => {
      if (query === '') {
        return;
      }
      try {
        const dataMovies = await fetchMovies(
          `https://api.themoviedb.org/3/search/movie?api_key=2a3036180539eed9a276bdc58fa572fc&language=en-US&query=${query}&page=1&include_adult=false`
        );

        const movies = dataMovies.results;

        setMoviesSearch(movies);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <section>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="query" autoComplete="off" />
          <button type="submit">Search</button>
        </form>

        <ul>
          {moviesSearch.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
