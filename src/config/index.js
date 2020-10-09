import Posts from '../features/Posts';
import PostsReducers from '../features/Posts/reducers.js';
import PostsSagas from '../features/Posts/sagas.js';
import SplashScreen from '../features/SplashScreen';

export const features = [
  {
    module: Posts,
    name: 'Posts',
    human_name: 'Posts',
    access_route: 'Posts',
  },
  {
    module: SplashScreen,
    name: 'SplashScreen',
    human_name: 'Splash Screen',
    access_route: 'Splash Screen',
  },
];

export const reducers = {Posts: PostsReducers};
export const sagas = [PostsSagas];
