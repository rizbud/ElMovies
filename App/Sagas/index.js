import {takeLatest, all} from 'redux-saga/effects';
import API from '@Services/Api';

/* ------------- Types ------------- */
import {StartupTypes} from '@Reduxes/StartupRedux';
import {MovieTypes} from '@Reduxes/MovieRedux';

/* ------------- Sagas ------------- */
import {startup} from './StartupSagas';
import {
  getNowPlayingMovie,
  getUpcomingMovie,
  getPopularMovie,
  getTopRatedMovie,
  getDetailMovie,
} from './MovieSagas';

/* ------------- API ------------- */
// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create();

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(MovieTypes.NOW_PLAYING_REQUEST, getNowPlayingMovie, api),
    takeLatest(MovieTypes.UPCOMING_REQUEST, getUpcomingMovie, api),
    takeLatest(MovieTypes.POPULAR_REQUEST, getPopularMovie, api),
    takeLatest(MovieTypes.TOP_RATED_REQUEST, getTopRatedMovie, api),
    takeLatest(MovieTypes.DETAIL_REQUEST, getDetailMovie, api),
  ]);
}
