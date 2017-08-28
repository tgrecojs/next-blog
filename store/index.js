import nextConnectRedux from 'next-connect-redux';
import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import logger from 'redux-logger';
import blogReducer from '../components/blog/blogroll/reducer';
const mainReducer = blogReducer.reducer;

import rootSaga from '../components/blog/saga';


export const initStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleWare();
  return {
    ...createStore(mainReducer, initialState, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga)
  };
};

export const nextConnect = nextConnectRedux(initStore);
