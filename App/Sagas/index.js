import {takeLatest, all} from 'redux-saga/effects';
import API from '@Services/Api';

/* ------------- Types ------------- */
import {StartupTypes} from '@Reduxes/StartupRedux';
import {MovieTypes} from '@Reduxes/MovieRedux';
import {TVTypes} from '@Reduxes/TVRedux';

/* ------------- Sagas ------------- */
import {startup} from './StartupSagas';
import {
  getNowPlayingMovie,
  getUpcomingMovie,
  getPopularMovie,
  getTopRatedMovie,
  getDetailMovie,
} from './MovieSagas';
import {
  getOnAirTV,
  getAirTodayTV,
  getPopularTV,
  getTopRatedTV,
  getDetailTV,
} from './TVSagas';

/* ------------- API ------------- */
// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create();

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // Movies
    takeLatest(MovieTypes.NOW_PLAYING_REQUEST, getNowPlayingMovie, api),
    takeLatest(MovieTypes.UPCOMING_REQUEST, getUpcomingMovie, api),
    takeLatest(MovieTypes.POPULAR_MOVIE_REQUEST, getPopularMovie, api),
    takeLatest(MovieTypes.TOP_RATED_MOVIE_REQUEST, getTopRatedMovie, api),
    takeLatest(MovieTypes.DETAIL_MOVIE_REQUEST, getDetailMovie, api),

    // TV
    takeLatest(TVTypes.ON_AIR_REQUEST, getOnAirTV, api),
    takeLatest(TVTypes.AIR_TODAY_REQUEST, getAirTodayTV, api),
    takeLatest(TVTypes.POPULAR_TV_REQUEST, getPopularTV, api),
    takeLatest(TVTypes.TOP_RATED_TV_REQUEST, getTopRatedTV, api),
    takeLatest(TVTypes.DETAIL_TV_REQUEST, getDetailTV, api),
  ]);
}
