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
import blogReducer from '../components/blog/reducer';


const mainReducer = combineReducers({
  form: formReducer.plugin({
    contact: (state, action) => { // <------ 'account' is name of form given to reduxForm()
      switch (action.type) {
        case '@@redux-form/SET_SUBMIT_SUCCEEDED':
          return undefined;       // <--- blow away form data
        default:
          return state;
      }
    }
  }),
  blog: blogReducer,
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
