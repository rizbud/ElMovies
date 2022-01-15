import {call, put} from 'redux-saga/effects';
import TVActions from '@Reduxes/TVRedux';

export function* getOnAirTV(api, action) {
  const {data} = action;
  const response = yield call(api.getOnAirTV, data);

  // success?
  if (response.ok) {
    yield put(TVActions.onAirSuccess(response.data?.results));
  } else {
    yield put(TVActions.onAirFailure(response));
  }
}

export function* getAirTodayTV(api, action) {
  const {data} = action;
  const response = yield call(api.getAirTodayTV, data);

  // success?
  if (response.ok) {
    yield put(TVActions.airTodaySuccess(response.data?.results));
  } else {
    yield put(TVActions.airTodayFailure(response));
  }
}

export function* getPopularTV(api, action) {
  const {data} = action;
  const response = yield call(api.getPopularTV, data);

  // success?
  if (response.ok) {
    yield put(TVActions.popularTVSuccess(response.data?.results));
  } else {
    yield put(TVActions.popularTVFailure(response));
  }
}

export function* getTopRatedTV(api, action) {
  const {data} = action;
  const response = yield call(api.getTopRatedTV, data);

  // success?
  if (response.ok) {
    yield put(TVActions.topRatedTVSuccess(response.data?.results));
  } else {
    yield put(TVActions.topRatedTVFailure(response));
  }
}

export function* getDetailTV(api, action) {
  const {data} = action;
  const response = yield call(api.getDetailTV, data);

  // success?
  if (response.ok) {
    yield put(TVActions.detailTVSuccess(response.data));
  } else {
    yield put(TVActions.detailTVFailure(response));
  }
}
