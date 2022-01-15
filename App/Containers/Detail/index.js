import {useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {connect} from 'react-redux';
import MovieActions from '@Reduxes/MovieRedux';
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
    detail,
    getDetail,
  } = props;
  const {data} = detail;

  useEffect(() => {
    getDetail(params?.id);
  }, []);

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
          />
          <View style={apply('mt-2 flex')}>
            <Text style={styles.title}>{params?.original_title}</Text>
            {detail?.fetching ? (
              <Shimmer style={apply('w-150 h-14 mb-2 mt-1')} />
            ) : (
              <Text style={styles.tagline}>{data?.tagline}</Text>
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
            <View style={styles.rowCenter}>
              {detail?.fetching ? (
                <Shimmer style={apply('w-50 h-12 mb-1')} />
              ) : (
                <>
                  <Icon size={14} name="clock" color={apply('gray-500')} />
                  <Text style={styles.date}>
                    {minutesToTime(data?.runtime)}
                  </Text>
                </>
              )}
            </View>
            <View style={styles.rowCenter}>
              <Icon size={14} name="calendar" color={apply('gray-500')} />
              <Text style={styles.date}>
                {moment(params?.release_date).format('DD MMMM YYYY')}
              </Text>
            </View>
            <View style={styles.rowCenter}>
              <Icon size={14} name="star" color={apply('gray-500')} />
              <Text style={styles.date}>{params?.vote_average}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.label}>Overview:</Text>
        <Text style={styles.overview}>{params?.overview}</Text>
      </View>
    </ScrollView>
  );
};

const mapStateTopProps = (state) => ({
  detail: state.movie.detail,
});

const mapDispatchToProps = (dispatch) => ({
  getDetail: (id) => dispatch(MovieActions.detailRequest(id)),
});

export default connect(mapStateTopProps, mapDispatchToProps)(Detail);
