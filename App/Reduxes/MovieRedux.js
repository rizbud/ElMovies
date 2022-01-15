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

  popularRequest: ['data'],
  popularSuccess: ['data'],
  popularFailure: ['error'],

  topRatedRequest: ['data'],
  topRatedSuccess: ['data'],
  topRatedFailure: ['error'],
});

export const MovieTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  nowPlaying: {data: [], fetching: false, error: null},
  upcoming: {data: [], fetching: false, error: null},
  popular: {data: [], fetching: false, error: null},
  topRated: {data: [], fetching: false, error: null},
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

export const popularRequest = (state, {data}) =>
  state.merge({
    ...state,
    popular: {
      ...state.popular,
      fetching: true,
      error: null,
    },
  });
export const popularSuccess = (state, {data}) =>
  state.merge({
    ...state,
    popular: {
      ...state.popular,
      data,
      fetching: false,
      error: null,
    },
  });
export const popularFailure = (state, {error}) =>
  state.merge({
    ...state,
    popular: {
      ...state.popular,
      fetching: false,
      error,
    },
  });

export const topRatedRequest = (state, {data}) =>
  state.merge({
    ...state,
    topRated: {
      ...state.topRated,
      fetching: true,
      error: null,
    },
  });
export const topRatedSuccess = (state, {data}) =>
  state.merge({
    ...state,
    topRated: {
      ...state.topRated,
      data,
      fetching: false,
      error: null,
    },
  });
export const topRatedFailure = (state, {error}) =>
  state.merge({
    ...state,
    topRated: {
      ...state.topRated,
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

  [Types.POPULAR_REQUEST]: popularRequest,
  [Types.POPULAR_SUCCESS]: popularSuccess,
  [Types.POPULAR_FAILURE]: popularFailure,

  [Types.TOP_RATED_REQUEST]: topRatedRequest,
  [Types.TOP_RATED_SUCCESS]: topRatedSuccess,
  [Types.TOP_RATED_FAILURE]: topRatedFailure,
});
