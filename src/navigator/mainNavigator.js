import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import PostsNavigator from '../features/BlankScreen0120547/navigator';

const AppNavigator = {
  Posts: {
    screen: PostsNavigator,
  },
};

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
