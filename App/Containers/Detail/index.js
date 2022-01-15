import {View, ScrollView, Text} from 'react-native';
import {HorizontalMovieList} from '@Components';
import Image from 'react-native-fast-image';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Images from '@Images';

import {apply} from '@Themes/OsmiProvider';
import styles from './style';
import {scaleWidth} from 'osmicsx';
import {minutesToTime} from '@Lib/TextUtils';

const Detail = (props) => {
  const {
    route: {params},
  } = props;

  return (
    <ScrollView
      style={apply('bg-gray-900')}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={apply('pb-4')}>
      <Image
        source={{
          uri:
            `${Images.prefix}${params?.backdrop_path}` ||
            'https://bodybigsize.com/wp-content/uploads/2020/03/noimage-14.png',
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
          <View style={apply('mt-2')}>
            <Text style={styles.title}>Hello world</Text>
            <Text style={styles.tagline}>The Multiverse unleashed.</Text>
            <Text style={styles.genres}>
              {[{name: 'Action'}, {name: 'Adventure'}].map(
                (item, index) => `${item?.name}${index !== 1 ? ', ' : ''}`,
              )}
            </Text>
            <View style={styles.rowCenter}>
              <Icon size={14} name="clock" color={apply('gray-500')} />
              <Text style={styles.date}>{minutesToTime(112)}</Text>
            </View>
            <View style={styles.rowCenter}>
              <Icon size={14} name="calendar" color={apply('gray-500')} />
              <Text style={styles.date}>
                {moment('2021-12-15').format('DD MMMM YYYY')}
              </Text>
            </View>
            <View style={styles.rowCenter}>
              <Icon size={14} name="star" color={apply('gray-500')} />
              <Text style={styles.date}>7.8</Text>
            </View>
          </View>
        </View>
        <Text style={styles.label}>Overview:</Text>
        <Text style={styles.overview}>
          Peter Parker is unmasked and no longer able to separate his normal
          life from the high-stakes of being a super-hero. When he asks for help
          from Doctor Strange the stakes become even more dangerous, forcing him
          to discover what it truly means to be Spider-Man.
        </Text>
      </View>
      <HorizontalMovieList title="Rekomendasi" data={[1, 2, 3]} />
    </ScrollView>
  );
};

export default Detail;
