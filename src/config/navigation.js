import React, {Component} from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  ScrollView,
  Platform,
  StyleSheet,
} from 'react-native';
import {
  createAppContainer,
  NavigationActions,
  StackActions,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {features} from './index.js';

export class SideMenu extends Component {
  onMenuItemPressed = item => {
    this.props.navigation.navigate(item.access_route);
  };

  renderMenu = () => features.map(this.renderMenuItem);

  renderMenuItem = item => (
    <TouchableHighlight
      style={styles.container}
      key={`${item.name}--blueprint-button`}
      activeOpacity={1}
      onPress={() => this.onMenuItemPressed(item)}>
      <View style={styles.content}>
        <View style={styles.content}>
          <Text category="s1">{item.human_name}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );

  render = () => (
    <View style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.container, styles.content]}>
          <Text category="h6">Crowdbotics</Text>
        </View>
        {this.renderMenu()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingHorizontal: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  root: {
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 13,
  },
});

const config = {};

export function setNavigator(nav) {
  if (nav) {
    config.navigator = nav;
  }
}

/**
 * Below functions are helpers to navigate to a route without the
 * navigation prop from React Navigation, helpful in sagas or action dispatchers
 * Just include check EmailAuth saga as an example
 */
export function navigate(routeName, params) {
  if (config.navigator && routeName) {
    let action = NavigationActions.navigate({routeName, params});
    config.navigator.dispatch(action);
  }
}
export function goBack() {
  if (config.navigator) {
    let action = NavigationActions.back({});
    config.navigator.dispatch(action);
  }
}

export function navigateAndResetStack(routeName, params) {
  if (config.navigator && routeName) {
    let action = NavigationActions.navigate({routeName, params});

    config.navigator.dispatch(
      StackActions.reset({
        index: 0,
        actions: [action],
      }),
    );
  }
}

// Dynamically generates navigators based on the features installed.
// This makes this file always functional and doesn't require any special
// attention from the user or even codegen to modify it.
let AppNavigator = {};
features.map(feature => {
  AppNavigator[feature.name] = {
    screen: feature.module,
    navigationOptions: {title: feature.human_name},
  };
});
AppNavigator = createStackNavigator(
  {
    ...AppNavigator,
  },
  {
    initialRouteName: features[0].access_route,
  },
);
const DrawerAppNavigator = createDrawerNavigator(
  {AppNavigator},
  {
    contentComponent: SideMenu,
  },
);

export const AppContainer = createAppContainer(DrawerAppNavigator);
