import { fetchMovies } from '../../servises/fetchMovies';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastList } from '../CastList/CastList';
import { RotatingLines } from 'react-loader-spinner';
import toast from 'react-hot-toast';

export const Cast = () => {
  const [actors, setActors] = useState([]);
  const [load, setLoad] = useState(false);

  const { movieId } = useParams();
  useEffect(() => {
    const fetch = async () => {
      try {
        setLoad(true);
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

        if (actors.length === 0) {
          toast.error(`No reviews.`);
        }

        setActors(actors);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoad(false);
      }
    };

    fetch();
  }, [movieId]);

  return (
    <>
      {actors ? <CastList actors={actors} /> : <div>No actors list</div>}{' '}
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
