import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Provider as ReduxProvider} from 'react-redux';
import SplashScreen from './src/features/SplashScreen';
import {features} from './src/config';
import {store} from './src/config/store';
import {setNavigator, AppContainer} from './src/config/navigation';

export default class App extends Component {
  state = {
    isLoaded: false,
  };

  componentDidMount() {
    setNavigator(this.navigator);
  }

  render = () => (
    <ReduxProvider store={store}>
      <AppContainer
        style={[styles.flex]}
        ref={nav => {
          this.navigator = nav;
        }}>
        <SplashScreen features={features} />
      </AppContainer>
    </ReduxProvider>
  );
}

const styles = {flex: {flex: 1}};

AppRegistry.registerComponent(appName, () => App);
