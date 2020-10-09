// Codegen the hits on a glob-search with pattern 'src/features/*'
import Posts from '../features/Posts';
// Codegen the hits on a glob-search with pattern 'src/features/**/reducers.js'
import PostsReducers from '../features/Posts/reducers.js';
// Codegen the hits on a glob-search with pattern 'src/features/**/sagas.js'
import PostsSagas from '../features/Posts/sagas.js';
// Hardcoded import
import SplashScreen from '../features/SplashScreen';

// Based on the hits above, codegen the map below
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

// Codegen a map between search hits names and their reducers, if present
export const reducers = {Posts: PostsReducers};
// Codegen a map between search hits names and their sagas, if present
export const sagas = [PostsSagas];
