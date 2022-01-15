import {View, Text} from 'react-native';
import {StatusBar} from '@Components';

import {apply} from '@Themes/OsmiProvider';

const TVShow = (props) => {
  return (
    <View style={apply('flex bg-gray-900')}>
      <StatusBar backgroundColor={apply('dark')} barStyle="light-mode" />
      <Text>asdasd</Text>
    </View>
  );
};

export default TVShow;
