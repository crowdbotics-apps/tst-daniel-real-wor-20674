import {createStackNavigator} from 'react-navigation-stack';

import index from './index.js';

export default (PostsNavigator = createStackNavigator(
  {
    Posts: {screen: index},
  },
  {
    initialRouteName: 'Posts',
  },
));
