import {useEffect} from 'react';
import {connect} from 'react-redux';
import StartupActions from '@Redux/StartupRedux';
import ReduxPersist from '@Config/ReduxPersist';
import AppNavigation from '@Navigation/AppNavigation';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from '@Components';

// styles
import {apply} from '@Themes/OsmiProvider';

const RootContainer = (props) => {
  useEffect(() => {
    if (!ReduxPersist.active) {
      props.startup();
    }
  }, []);

  return (
    <SafeAreaView style={apply('flex')}>
      <StatusBar barStyle="light-content" backgroundColor={apply('dark')} />
      <AppNavigation />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
