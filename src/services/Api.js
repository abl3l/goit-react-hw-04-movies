import axios from 'axios';

const API_KEY = 'd3cd3a22aa59836ebf299df8b5c37c2f';

export const getTrendingMovies = () =>
  axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`,
  );

export const SearchMovies = query =>
  axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`,
  );

export const getMovieDetails = id =>
  axios
    .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    .then(response => response.data);

export const getMovieCredits = id =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`,
  );

export const getMovieReviews = id =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`,
  );
