import nextConnectRedux from 'next-connect-redux';
import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { reducer as formSlice } from '../components/form/reducer';
import { reducer as aboutMeReducer } from '../components/about-me/reducer';
import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';

const mainReducer = combineReducers({
  form: formReducer,
  aboutMe: aboutMeReducer
});

import rootSaga from './sagas';


export const initStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleWare();
  return {
    ...createStore(mainReducer, initialState, applyMiddleware(sagaMiddleware, logger)),
    runSaga: sagaMiddleware.run(rootSaga)
  };
};

export const nextConnect = nextConnectRedux(initStore);
