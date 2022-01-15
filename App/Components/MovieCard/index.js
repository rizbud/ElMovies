import {memo} from 'react';
import {View, Text} from 'react-native';
import Image from 'react-native-fast-image';
import moment from 'moment';
import 'moment/locale/id';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './style';
import {scaleWidth} from 'osmicsx';
import {apply} from '@Themes/OsmiProvider';

const MovieCard = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://image.tmdb.org/t/p/w500/AtOPDh4wzbqLczLPOX5QxWnBxE1.jpg',
        }}
        style={[styles.image, {height: scaleWidth(50)}]}
        resizeMode="stretch"
      />
      <Text numberOfLines={2} style={styles.title}>
        Heelo World
      </Text>
      <View style={styles.row}>
        <Icon name="calendar" color={apply('gray-500')} />
        <Text style={styles.date}>
          {moment('2021-12-15').format('DD MMM YYYY')}
        </Text>
      </View>
    </View>
  );
};

export default memo(MovieCard);
