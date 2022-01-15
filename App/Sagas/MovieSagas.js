import {call, put} from 'redux-saga/effects';
import MovieActions from '@Reduxes/MovieRedux';

export function* getNowPlayingMovie(api, action) {
  const {data} = action;
  const response = yield call(api.getNowPlayingMovie, data);

  // success?
  if (response.ok) {
    yield put(MovieActions.nowPlayingSuccess(response.data?.results));
  } else {
    yield put(MovieActions.nowPlayingFailure(response));
  }
}

export function* getUpcomingMovie(api, action) {
  const {data} = action;
  const response = yield call(api.getUpcomingMovie, data);

  // success?
  if (response.ok) {
    yield put(MovieActions.upcomingSuccess(response.data?.results));
  } else {
    yield put(MovieActions.upcomingFailure(response));
  }
}

export function* getPopularMovie(api, action) {
  const {data} = action;
  const response = yield call(api.getPopularMovie, data);

  // success?
  if (response.ok) {
    yield put(MovieActions.popularMovieSuccess(response.data?.results));
  } else {
    yield put(MovieActions.popularMovieFailure(response));
  }
}

export function* getTopRatedMovie(api, action) {
  const {data} = action;
  const response = yield call(api.getTopRatedMovie, data);

  // success?
  if (response.ok) {
    yield put(MovieActions.topRatedMovieSuccess(response.data?.results));
  } else {
    yield put(MovieActions.topRatedMovieFailure(response));
  }
}

export function* getDetailMovie(api, action) {
  const {data} = action;
  const response = yield call(api.getDetailMovie, data);

  // success?
  if (response.ok) {
    yield put(MovieActions.detailMovieSuccess(response.data));
  } else {
    yield put(MovieActions.detailMovieFailure(response));
  }
}
