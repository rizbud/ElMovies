import {useCallback, useEffect} from 'react';
import {connect} from 'react-redux';
import MovieActions from '@Reduxes/MovieRedux';
import {RefreshControl, ScrollView} from 'react-native';
import {StatusBar, HorizontalMovieList} from '@Components';

import {apply} from '@Themes/OsmiProvider';

const Movies = (props) => {
  const {
    nowPlaying,
    popular,
    upcoming,
    topRated,

    getNowPlaying,
    getUpcoming,
    getPopular,
    getTopRated,
  } = props;

  useEffect(() => {
    _getData();
  }, []);

  const _getData = useCallback(() => {
    getNowPlaying();
    getUpcoming();
    getPopular();
    getTopRated();
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={_getData} />
      }
      showsVerticalScrollIndicator={false}
      contentContainerStyle={apply('pb-4')}
      style={apply('bg-gray-900')}>
      <StatusBar backgroundColor={apply('dark')} barStyle="light-mode" />
      <HorizontalMovieList
        isLoading={nowPlaying?.fetching}
        title="Now Playing"
        data={nowPlaying?.data}
        type="movie"
      />
      <HorizontalMovieList
        isLoading={upcoming?.fetching}
        title="Upcoming"
        data={upcoming?.data}
        type="movie"
      />
      <HorizontalMovieList
        isLoading={popular?.fetching}
        title="Popular"
        data={popular?.data}
        type="movie"
      />
      <HorizontalMovieList
        isLoading={topRated?.fetching}
        title="Top Rated"
        data={topRated?.data}
        type="movie"
      />
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  nowPlaying: state.movie.nowPlaying,
  upcoming: state.movie.upcoming,
  popular: state.movie.popularMovie,
  topRated: state.movie.topRatedMovie,
});

const mapDispatchToProps = (dispatch) => ({
  getNowPlaying: () => dispatch(MovieActions.nowPlayingRequest()),
  getUpcoming: () => dispatch(MovieActions.upcomingRequest()),
  getPopular: () => dispatch(MovieActions.popularMovieRequest()),
  getTopRated: () => dispatch(MovieActions.topRatedMovieRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
