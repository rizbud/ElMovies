import {memo} from 'react';
import {StatusBar as AppBar, View, Platform} from 'react-native';
import {getStatusBarHeight} from '@Lib/Iphone-X';

const StatusBar = (props) => {
  const {backgroundColor} = props;

  return Platform.OS === 'ios' ? (
    <View style={{height: getStatusBarHeight(true), backgroundColor}}>
      <AppBar {...props} />
    </View>
  ) : (
    <AppBar {...props} />
  );
};

StatusBar.propTypes = AppBar.propTypes;

export default memo(StatusBar);
