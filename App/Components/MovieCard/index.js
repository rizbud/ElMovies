import {memo} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Image from 'react-native-fast-image';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import styles from './style';
import {scaleWidth} from 'osmicsx';
import {apply} from '@Themes/OsmiProvider';

const MovieCard = (props) => {
  const {item} = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.push('Detail', item)}
      style={styles.container}>
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
    </TouchableOpacity>
  );
};

export default memo(MovieCard);
