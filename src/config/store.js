import {reducers} from './index.js';
import {sagas} from './index.js';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [sagaMiddleware];

// This is compatible with any number of sagas/reducers
// Reducers are combined and sagas are applied one by one as middleware
const store = createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(...middlewares)),
);
sagas.map(saga => sagaMiddleware.run(saga));

export {store};
