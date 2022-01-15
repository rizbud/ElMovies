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
        isLoading={nowPlaying.fetching}
        title="Now Playing"
        data={nowPlaying?.data}
      />
      <HorizontalMovieList
        isLoading={upcoming.fetching}
        title="Upcoming"
        data={upcoming?.data}
      />
      <HorizontalMovieList
        isLoading={popular.fetching}
        title="Popular"
        data={popular?.data}
      />
      <HorizontalMovieList
        isLoading={topRated.fetching}
        title="Top Rated"
        data={topRated?.data}
      />
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  nowPlaying: state.movie.nowPlaying,
  upcoming: state.movie.upcoming,
  popular: state.movie.popular,
  topRated: state.movie.topRated,
});

const mapDispatchToProps = (dispatch) => ({
  getNowPlaying: () => dispatch(MovieActions.nowPlayingRequest()),
  getUpcoming: () => dispatch(MovieActions.upcomingRequest()),
  getPopular: () => dispatch(MovieActions.popularRequest()),
  getTopRated: () => dispatch(MovieActions.topRatedRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
