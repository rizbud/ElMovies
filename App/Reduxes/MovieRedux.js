import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  nowPlayingRequest: ['data'],
  nowPlayingSuccess: ['data'],
  nowPlayingFailure: ['error'],

  upcomingRequest: ['data'],
  upcomingSuccess: ['data'],
  upcomingFailure: ['error'],

  popularMovieRequest: ['data'],
  popularMovieSuccess: ['data'],
  popularMovieFailure: ['error'],

  topRatedMovieRequest: ['data'],
  topRatedMovieSuccess: ['data'],
  topRatedMovieFailure: ['error'],

  detailMovieRequest: ['data'],
  detailMovieSuccess: ['data'],
  detailMovieFailure: ['error'],
});

export const MovieTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  nowPlaying: {data: [], fetching: false, error: null},
  upcoming: {data: [], fetching: false, error: null},
  popularMovie: {data: [], fetching: false, error: null},
  topRatedMovie: {data: [], fetching: false, error: null},
  detailMovie: {data: null, fetching: false, error: null},
});

/* ------------- Reducers ------------- */

export const nowPlayingRequest = (state, {data}) =>
  state.merge({
    ...state,
    nowPlaying: {
      ...state.nowPlaying,
      fetching: true,
      error: null,
    },
  });
export const nowPlayingSuccess = (state, {data}) =>
  state.merge({
    ...state,
    nowPlaying: {
      ...state.nowPlaying,
      data,
      fetching: false,
      error: null,
    },
  });
export const nowPlayingFailure = (state, {error}) =>
  state.merge({
    ...state,
    nowPlaying: {
      ...state.nowPlaying,
      fetching: false,
      error,
    },
  });

export const upcomingRequest = (state, {data}) =>
  state.merge({
    ...state,
    upcoming: {
      ...state.upcoming,
      fetching: true,
      error: null,
    },
  });
export const upcomingSuccess = (state, {data}) =>
  state.merge({
    ...state,
    upcoming: {
      ...state.upcoming,
      data,
      fetching: false,
      error: null,
    },
  });
export const upcomingFailure = (state, {error}) =>
  state.merge({
    ...state,
    upcoming: {
      ...state.upcoming,
      fetching: false,
      error,
    },
  });

export const popularMovieRequest = (state, {data}) =>
  state.merge({
    ...state,
    popularMovie: {
      ...state.popularMovie,
      fetching: true,
      error: null,
    },
  });
export const popularMovieSuccess = (state, {data}) =>
  state.merge({
    ...state,
    popularMovie: {
      ...state.popularMovie,
      data,
      fetching: false,
      error: null,
    },
  });
export const popularMovieFailure = (state, {error}) =>
  state.merge({
    ...state,
    popularMovie: {
      ...state.popularMovie,
      fetching: false,
      error,
    },
  });

export const topRatedMovieRequest = (state, {data}) =>
  state.merge({
    ...state,
    topRatedMovie: {
      ...state.topRatedMovie,
      fetching: true,
      error: null,
    },
  });
export const topRatedMovieSuccess = (state, {data}) =>
  state.merge({
    ...state,
    topRatedMovie: {
      ...state.topRatedMovie,
      data,
      fetching: false,
      error: null,
    },
  });
export const topRatedMovieFailure = (state, {error}) =>
  state.merge({
    ...state,
    topRatedMovie: {
      ...state.topRatedMovie,
      fetching: false,
      error,
    },
  });

export const detailMovieRequest = (state, {data}) =>
  state.merge({
    ...state,
    detailMovie: {
      ...state.detailMovie,
      fetching: true,
      error: null,
    },
  });
export const detailMovieSuccess = (state, {data}) =>
  state.merge({
    ...state,
    detailMovie: {
      ...state.detailMovie,
      data,
      fetching: false,
      error: null,
    },
  });
export const detailMovieFailure = (state, {error}) =>
  state.merge({
    ...state,
    detailMovie: {
      ...state.detailMovie,
      fetching: false,
      error,
    },
  });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.NOW_PLAYING_REQUEST]: nowPlayingRequest,
  [Types.NOW_PLAYING_SUCCESS]: nowPlayingSuccess,
  [Types.NOW_PLAYING_FAILURE]: nowPlayingFailure,

  [Types.UPCOMING_REQUEST]: upcomingRequest,
  [Types.UPCOMING_SUCCESS]: upcomingSuccess,
  [Types.UPCOMING_FAILURE]: upcomingFailure,

  [Types.POPULAR_MOVIE_REQUEST]: popularMovieRequest,
  [Types.POPULAR_MOVIE_SUCCESS]: popularMovieSuccess,
  [Types.POPULAR_MOVIE_FAILURE]: popularMovieFailure,

  [Types.TOP_RATED_MOVIE_REQUEST]: topRatedMovieRequest,
  [Types.TOP_RATED_MOVIE_SUCCESS]: topRatedMovieSuccess,
  [Types.TOP_RATED_MOVIE_FAILURE]: topRatedMovieFailure,

  [Types.DETAIL_MOVIE_REQUEST]: detailMovieRequest,
  [Types.DETAIL_MOVIE_SUCCESS]: detailMovieSuccess,
  [Types.DETAIL_MOVIE_FAILURE]: detailMovieFailure,
});
