import {useCallback, useEffect} from 'react';
import {connect} from 'react-redux';
import TVActions from '@Reduxes/TVRedux';
import {RefreshControl, ScrollView} from 'react-native';
import {StatusBar, HorizontalMovieList} from '@Components';

import {apply} from '@Themes/OsmiProvider';

const TVShow = (props) => {
  const {
    onAir,
    airToday,
    popular,
    topRated,

    getOnAir,
    getAirToday,
    getPopular,
    getTopRated,
  } = props;

  useEffect(() => {
    _getData();
  }, []);

  const _getData = useCallback(() => {
    getOnAir();
    getAirToday();
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
        isLoading={onAir?.fetching}
        title="On the Air"
        data={onAir?.data}
        type="tv"
      />
      <HorizontalMovieList
        isLoading={airToday?.fetching}
        title="Airing Today"
        data={airToday?.data}
        type="tv"
      />
      <HorizontalMovieList
        isLoading={popular?.fetching}
        title="Popular"
        data={popular?.data}
        type="tv"
      />
      <HorizontalMovieList
        isLoading={topRated?.fetching}
        title="Top Rated"
        data={topRated?.data}
        type="tv"
      />
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  onAir: state.tv.onAir,
  airToday: state.tv.airToday,
  popular: state.tv.popularTV,
  topRated: state.tv.topRatedTV,
});

const mapDispatchToProps = (dispatch) => ({
  getOnAir: () => dispatch(TVActions.onAirRequest()),
  getAirToday: () => dispatch(TVActions.airTodayRequest()),
  getPopular: () => dispatch(TVActions.popularTVRequest()),
  getTopRated: () => dispatch(TVActions.topRatedTVRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TVShow);
