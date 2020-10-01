import {createStackNavigator} from 'react-navigation-stack';

import index from './screens/blank.js';

export default (PostsNavigator = createStackNavigator(
  {
    Posts: {screen: index},
  },
  {
    initialRouteName: 'Posts',
  },
));
