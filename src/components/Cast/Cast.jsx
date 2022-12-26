import { fetchMovies } from '../../servises/fetchMovies';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ActorList } from '../ActorList/ActorList';

export const Cast = () => {
  const [actors, setActors] = useState([]);

  const { movieId } = useParams();
  useEffect(() => {
    const fetch = async () => {
      try {
        const dataMovie = await fetchMovies(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=2a3036180539eed9a276bdc58fa572fc&language=en-US`
        );

        const actors = dataMovie.cast.map(
          ({ id, name, character, profile_path }) => ({
            id,
            name,
            character,
            profile_path,
          })
        );

        setActors(actors);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetch();
  }, [movieId]);

  return (
    <>{actors ? <ActorList actors={actors} /> : <div>No actors list</div>}</>
  );
};
