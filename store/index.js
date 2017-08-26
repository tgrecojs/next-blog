import nextConnectRedux from 'next-connect-redux';
import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import blogReducer from '../components/blog/blogroll/reducer';
import postReducer from '../components/blog/post/reducer';
import modalReducer from '../components/form/reducer';


const mainReducer = combineReducers({
  form: formReducer.plugin({
    contact: (state, action) => { // <------ 'account' is name of form given to reduxForm()
      switch(action.type) {
        case 'SUBMIT_WORKED':
          return undefined;       // <--- blow away form data
        default:
          return state;
      }
    }
  }),
  blog: blogReducer.reducer,
  post: postReducer,
  modal: modalReducer
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
