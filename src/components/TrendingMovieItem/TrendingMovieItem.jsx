import { Link } from 'react-router-dom';

export const TrendingMovieItem = ({ name }) => {
  return (
    <li>
      <Link>{name}</Link>
    </li>
  );
};
