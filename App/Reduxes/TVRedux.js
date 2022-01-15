import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  onAirRequest: ['data'],
  onAirSuccess: ['data'],
  onAirFailure: ['error'],

  airTodayRequest: ['data'],
  airTodaySuccess: ['data'],
  airTodayFailure: ['error'],

  popularTVRequest: ['data'],
  popularTVSuccess: ['data'],
  popularTVFailure: ['error'],

  topRatedTVRequest: ['data'],
  topRatedTVSuccess: ['data'],
  topRatedTVFailure: ['error'],

  detailTVRequest: ['data'],
  detailTVSuccess: ['data'],
  detailTVFailure: ['error'],
});

export const TVTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  onAir: {data: [], fetching: false, error: null},
  airToday: {data: [], fetching: false, error: null},
  popularTV: {data: [], fetching: false, error: null},
  topRatedTV: {data: [], fetching: false, error: null},
  detailTV: {data: null, fetching: false, error: null},
});

/* ------------- Reducers ------------- */

export const onAirRequest = (state, {data}) =>
  state.merge({
    ...state,
    onAir: {
      ...state.onAir,
      fetching: true,
      error: null,
    },
  });
export const onAirSuccess = (state, {data}) =>
  state.merge({
    ...state,
    onAir: {
      ...state.onAir,
      data,
      fetching: false,
      error: null,
    },
  });
export const onAirFailure = (state, {error}) =>
  state.merge({
    ...state,
    onAir: {
      ...state.onAir,
      fetching: false,
      error,
    },
  });

export const airTodayRequest = (state, {data}) =>
  state.merge({
    ...state,
    airToday: {
      ...state.airToday,
      fetching: true,
      error: null,
    },
  });
export const airTodaySuccess = (state, {data}) =>
  state.merge({
    ...state,
    airToday: {
      ...state.airToday,
      data,
      fetching: false,
      error: null,
    },
  });
export const airTodayFailure = (state, {error}) =>
  state.merge({
    ...state,
    airToday: {
      ...state.airToday,
      fetching: false,
      error,
    },
  });

export const popularTVRequest = (state, {data}) =>
  state.merge({
    ...state,
    popularTV: {
      ...state.popularTV,
      fetching: true,
      error: null,
    },
  });
export const popularTVSuccess = (state, {data}) =>
  state.merge({
    ...state,
    popularTV: {
      ...state.popularTV,
      data,
      fetching: false,
      error: null,
    },
  });
export const popularTVFailure = (state, {error}) =>
  state.merge({
    ...state,
    popularTV: {
      ...state.popularTV,
      fetching: false,
      error,
    },
  });

export const topRatedTVRequest = (state, {data}) =>
  state.merge({
    ...state,
    topRatedTV: {
      ...state.topRatedTV,
      fetching: true,
      error: null,
    },
  });
export const topRatedTVSuccess = (state, {data}) =>
  state.merge({
    ...state,
    topRatedTV: {
      ...state.topRatedTV,
      data,
      fetching: false,
      error: null,
    },
  });
export const topRatedTVFailure = (state, {error}) =>
  state.merge({
    ...state,
    topRatedTV: {
      ...state.topRatedTV,
      fetching: false,
      error,
    },
  });

export const detailTVRequest = (state, {data}) =>
  state.merge({
    ...state,
    detailTV: {
      ...state.detailTV,
      fetching: true,
      error: null,
    },
  });
export const detailTVSuccess = (state, {data}) =>
  state.merge({
    ...state,
    detailTV: {
      ...state.detailTV,
      data,
      fetching: false,
      error: null,
    },
  });
export const detailTVFailure = (state, {error}) =>
  state.merge({
    ...state,
    detailTV: {
      ...state.detailTV,
      fetching: false,
      error,
    },
  });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ON_AIR_REQUEST]: onAirRequest,
  [Types.ON_AIR_SUCCESS]: onAirSuccess,
  [Types.ON_AIR_FAILURE]: onAirFailure,

  [Types.AIR_TODAY_REQUEST]: airTodayRequest,
  [Types.AIR_TODAY_SUCCESS]: airTodaySuccess,
  [Types.AIR_TODAY_FAILURE]: airTodayFailure,

  [Types.POPULAR_TV_REQUEST]: popularTVRequest,
  [Types.POPULAR_TV_SUCCESS]: popularTVSuccess,
  [Types.POPULAR_TV_FAILURE]: popularTVFailure,

  [Types.TOP_RATED_TV_REQUEST]: topRatedTVRequest,
  [Types.TOP_RATED_TV_SUCCESS]: topRatedTVSuccess,
  [Types.TOP_RATED_TV_FAILURE]: topRatedTVFailure,

  [Types.DETAIL_TV_REQUEST]: detailTVRequest,
  [Types.DETAIL_TV_SUCCESS]: detailTVSuccess,
  [Types.DETAIL_TV_FAILURE]: detailTVFailure,
});
