import {View, Text} from 'react-native';
import {StatusBar, HorizontalMovieList} from '@Components';

import {apply} from '@Themes/OsmiProvider';

const Movies = (props) => {
  return (
    <View style={apply('flex bg-gray-900')}>
      <StatusBar backgroundColor={apply('dark')} barStyle="light-mode" />
      <HorizontalMovieList title="Now Playing" data={new Array(5)} />
    </View>
  );
};

export default Movies;
