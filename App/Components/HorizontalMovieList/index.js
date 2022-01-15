import {memo} from 'react';
import {View, FlatList, Text} from 'react-native';
import {MovieCard} from '@Components';

import styles from './style';
import {apply} from '@Themes/OsmiProvider';

const HorizontalMovieList = (props) => {
  const {data, title, isLoading, type} = props;

  return (
    <View style={apply('mt-4')}>
      <View style={styles.row}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <FlatList
        horizontal
        data={isLoading ? [1, 2, 3] : data}
        bounces={false}
        contentContainerStyle={styles.container}
        keyExtractor={(_, id) => String(id)}
        renderItem={({item}) => (
          <MovieCard item={item} isLoading={isLoading} type={type} />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default memo(HorizontalMovieList);
