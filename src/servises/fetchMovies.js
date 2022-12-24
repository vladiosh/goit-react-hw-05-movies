import axios from 'axios';

export const fetchMovies = async url => {
  const response = await axios.get(url);

  return response.data;
};
