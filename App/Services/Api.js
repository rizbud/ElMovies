// a library to wrap and simplify api calls
import apisauce from 'apisauce';
import Env from 'react-native-config';

// default headers request
const headers = {
  'Content-Type': 'application/json',
};

const api_key = 'f7b67d9afdb3c971d4419fa4cb667fbf';

const create = (baseURL = 'https://api.themoviedb.org/3/') => {
  const api = apisauce.create({
    baseURL,
    headers,
    timeout: 15000,
  });

  const getNowPlayingMovie = () =>
    api.get(`/movie/now_playing?api_key=${api_key}`);
  const getUpcomingMovie = () => api.get(`/movie/upcoming?api_key=${api_key}`);
  const getPopularMovie = () => api.get(`/movie/popular?api_key=${api_key}`);
  const getTopRatedMovie = () => api.get(`/movie/top_rated?api_key=${api_key}`);
  const getDetailMovie = (id) => api.get(`/movie/${id}?api_key=${api_key}`);

  const getOnAirTV = () => api.get(`/tv/on_the_air?api_key=${api_key}`);
  const getAirTodayTV = () => api.get(`/tv/airing_today?api_key=${api_key}`);
  const getPopularTV = () => api.get(`/tv/popular?api_key=${api_key}`);
  const getTopRatedTV = () => api.get(`/tv/top_rated?api_key=${api_key}`);
  const getDetailTV = (id) => api.get(`/tv/${id}?api_key=${api_key}`);

  return {
    getNowPlayingMovie,
    getUpcomingMovie,
    getPopularMovie,
    getTopRatedMovie,
    getDetailMovie,
    getOnAirTV,
    getAirTodayTV,
    getPopularTV,
    getTopRatedTV,
    getDetailTV,

    api,
  };
};

// let's return back our create method as the default.
export default {
  create,
};
