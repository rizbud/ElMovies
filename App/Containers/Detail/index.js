import {memo, useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {connect} from 'react-redux';
import MovieActions from '@Reduxes/MovieRedux';
import TVActions from '@Reduxes/TVRedux';
import Image from 'react-native-fast-image';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Shimmer} from '@Components';
import Images from '@Images';
import {minutesToTime} from '@Lib/TextUtils';

import {apply} from '@Themes/OsmiProvider';
import styles from './style';
import {scaleWidth} from 'osmicsx';

const Detail = (props) => {
  const {
    route: {params},
    detailMovie,
    detailTV,
    getDetailMovie,
    getDetailTV,
  } = props;
  const detail = params?.type === 'movie' ? detailMovie : detailTV;
  const getDetail = params?.type === 'movie' ? getDetailMovie : getDetailTV;
  const data = detail?.data;

  useEffect(() => {
    getDetail(params?.id);
  }, []);

  const RowShimmer = memo(({children}) => (
    <View style={styles.rowStart}>
      {detail?.fetching ? (
        <Shimmer style={apply('w-50 h-12 mb-1')} />
      ) : (
        children
      )}
    </View>
  ));

  return (
    <ScrollView
      style={apply('bg-gray-900')}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={apply('pb-4')}>
      <Image
        source={{
          uri: params?.backdrop_path
            ? `${Images.prefix}${params?.backdrop_path}`
            : 'https://bodybigsize.com/wp-content/uploads/2020/03/noimage-14.png',
        }}
        style={[styles.backdrop, {height: scaleWidth(56)}]}
        resizeMode="stretch"
      />
      <View style={apply('mx-4 mb-4')}>
        <View style={styles.row}>
          <Image
            style={[
              styles.image,
              {height: scaleWidth(41), marginTop: -scaleWidth(9)},
            ]}
            source={{
              uri: `${Images.prefix}${params?.poster_path}`,
            }}
            resizeMode="stretch"
          />
          <View style={apply('mt-2 flex')}>
            <Text style={styles.title}>
              {params?.original_title || params?.name}
            </Text>
            {detail?.fetching ? (
              <Shimmer style={apply('w-150 h-14 mb-2 mt-1')} />
            ) : (
              data?.tagline !== '' && (
                <Text style={styles.tagline}>{data?.tagline}</Text>
              )
            )}
            {detail?.fetching ? (
              <Shimmer style={apply('full h-14 mb-2 mt-1')} />
            ) : (
              <Text style={styles.genres}>
                {data?.genres.map(
                  (item, index) =>
                    `${item?.name}${
                      index !== data?.genres?.length - 1 ? ', ' : ''
                    }`,
                )}
              </Text>
            )}
            {params?.type === 'movie' && (
              <RowShimmer>
                <Icon size={14} name="clock" color={apply('gray-500')} />
                <Text style={[styles.date, {marginTop: -2}]}>
                  {minutesToTime(data?.runtime)}
                </Text>
              </RowShimmer>
            )}
            <RowShimmer>
              <Icon size={14} name="calendar" color={apply('gray-500')} />
              <Text style={[styles.date, {marginTop: -2}]}>
                {moment(data?.release_date || data?.first_air_date).format(
                  'DD MMMM YYYY',
                )}
                {data?.last_air_date &&
                  ` - ${moment(data?.last_air_date).format('DD MMMM YYYY')}`}
              </Text>
            </RowShimmer>
            <RowShimmer>
              <Icon size={14} name="star" color={apply('gray-500')} />
              <Text style={[styles.date, {marginTop: -2}]}>
                {params?.vote_average}
              </Text>
            </RowShimmer>
          </View>
        </View>
        <Text style={styles.label}>Overview:</Text>
        <Text style={styles.overview}>{params?.overview}</Text>
      </View>
    </ScrollView>
  );
};

const mapStateTopProps = (state) => ({
  detailMovie: state.movie.detailMovie,
  detailTV: state.tv.detailTV,
});

const mapDispatchToProps = (dispatch) => ({
  getDetailMovie: (id) => dispatch(MovieActions.detailMovieRequest(id)),
  getDetailTV: (id) => dispatch(TVActions.detailTVRequest(id)),
});

export default connect(mapStateTopProps, mapDispatchToProps)(Detail);
