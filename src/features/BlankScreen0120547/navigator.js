import {createStackNavigator} from 'react-navigation-stack';

import index from './screens/blank';

export default (PostsNavigator = createStackNavigator(
  {
    Posts: {screen: index},
  },
  {
    initialRouteName: 'Posts',
  },
));
