import thunk from 'redux-thunk';
import promise from 'redux-promise';
import storage from 'redux-persist/lib/storage';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { createEpicMiddleware } from 'redux-observable';
import createRootReducer from './createRootReducer';

export const history = createHistory();

const persistConfig = {
  key: 'root',
  // Default all the reducers will be rehydrated, except the blacklisted ones. On refresh you will lose the data.
  blacklist: ['loader', 'job', 'stream', 'notification', 'form', 'router'],
  storage,
};

const persistedReducer = persistReducer(persistConfig, createRootReducer(history));
const epicMiddleware = createEpicMiddleware();

const initialState = {};
const enhancers = [];
const middleware = [thunk, promise, epicMiddleware, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const { devToolsExtension } = window;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

export const store = createStore(persistedReducer, initialState, composedEnhancers);

export const persistor = persistStore(store);
