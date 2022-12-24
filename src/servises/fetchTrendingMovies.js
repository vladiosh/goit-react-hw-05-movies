import axios from 'axios';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// const API_KEY = '2a3036180539eed9a276bdc58fa572fc';

// export const fetchTrendingMovies = async () => {
//   const response = await axios.get(`trending/movie/week?api_key=${API_KEY}`);

//   const dataTrendingMovies = response.data.results.map(
//     ({ id, original_title }) => ({
//       id,
//       original_title,
//     })
//   );

//   return dataTrendingMovies;
// };

export const fetchTrendingMovies = async url => {
  const response = await axios.get(url);

  return response.data;
};
