import {memo} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Image from 'react-native-fast-image';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Shimmer} from '@Components';
import Images from '@Images';
import {useNavigation} from '@react-navigation/native';

import styles from './style';
import {scaleWidth} from 'osmicsx';
import {apply} from '@Themes/OsmiProvider';

const MovieCard = (props) => {
  const {item, isLoading} = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.push('Detail', item)}
      style={styles.container}>
      {isLoading ? (
        <Shimmer style={[styles.image, {height: scaleWidth(50)}]} />
      ) : (
        <>
          <Image
            source={{
              uri: `${Images.prefix}${item?.poster_path}`,
            }}
            style={[styles.image, {height: scaleWidth(50)}]}
            resizeMode="stretch"
          />
          <Text numberOfLines={2} style={styles.title}>
            {item?.title}
          </Text>
          <View style={styles.row}>
            <Icon name="calendar" color={apply('gray-500')} />
            <Text style={styles.date}>
              {moment(item?.release_date).format('DD MMM YYYY')}
            </Text>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

export default memo(MovieCard);
