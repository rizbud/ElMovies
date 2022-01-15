import {useEffect} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {connect} from '@Themes/OsmiProvider';
import {scaleWidth} from 'osmicsx';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timeout = setTimeout(() => navigation.replace('Tab'), 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Icon name="netflix" color="#E50914" size={scaleWidth(50)} />
    </View>
  );
};

const styles = connect({
  container: 'flex full h/100 items-center justify-around bg-gray-900 row',
});

export default SplashScreen;
