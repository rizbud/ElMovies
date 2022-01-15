import {memo} from 'react';
import {Text} from 'react-native';
import RNShimmer from 'react-native-shimmer';
import {apply} from '@Themes/OsmiProvider';

const Shimmer = ({style}) => (
  <RNShimmer
    animating
    style={[apply('bg-white h-18 w-100 overflow-hidden'), style]}>
    <Text />
  </RNShimmer>
);

export default memo(Shimmer);
