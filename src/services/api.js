import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDk4ZmM4Y2E3ODIzZTMxZjk3MmZjNjM1ZDhlMzNkYSIsIm5iZiI6MTcyOTE2NjU1OC43MTA1NjQsInN1YiI6IjY1ZTM0NTU0ZmUwNzdhMDE4NTBlZjY4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J7MYad9onIQ3bQ-4_cDqfgoTzHXsADnRocnuNKVosU4',
  },
  params: {
    language: 'en-US',
    include_adult: false,
  },
};

export const getTrendingMovies = async () => {
  const { data } = await axios.get('trending/movie/day', options);
  return data.results;
};

export const getSearchedMovies = async query => {
  const { data } = await axios.get(`search/movie?query=${query}`, options);
  return data.results;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(`movie/${movieId}`, options);
  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/credits`, options);
  return data.cast;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/reviews`, options);
  return data.results;
};
