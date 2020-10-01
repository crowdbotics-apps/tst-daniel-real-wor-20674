import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from '../features/SplashScreen';
import SideMenu from './sideMenu';
import PostsNavigator from '../features/posts/navigator';

const AppNavigator = {
  Posts: {
    screen: PostsNavigator,
  },
  SplashScreen: {
    screen: SplashScreen,
  },
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
