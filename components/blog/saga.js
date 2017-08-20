import { takeEvery, call, put, all } from 'redux-saga/effects';
import {
  initializeBlog, INITIALIZE_BLOG_SUCCESS, selectPost, POST_SELECTED, SELECTED_POST_SUCCESS
} from './reducer';
import initialize from '../../store/api';
import Router from 'next/router';
const log = (...args) => console.log(...args);

const goToBlog = () => Router.push('/blog')
// subroutines
export function* handleInitializeBlogger(action) {
  try {
    const { payload } = action;
    const posts = yield call(initialize.initializeBlog, payload);
    yield put({ type: INITIALIZE_BLOG_SUCCESS, payload: posts});
  } catch (e) {
    yield call(log, `Error while initializing blog: ${e}`);
    yield alert('Error! Please reload the page!');
  }
}

export function* handleSelectPost (action) {
  try {
    const { payload } = action;
    const post = yield call(initialize.selectPost, payload);
    yield ({ type: SELECTED_POST_SUCCESS, payload: post});
  } catch (e) {
      yield call(log, `Error while retreiving blog post: ${e}`); 
  }
}


// watchers
export function* watchInitializeBlogger() {
  yield takeEvery(initializeBlog().type, handleInitializeBlogger);
}
export function* watchSelectPost() {
  yield takeEvery(selectPost().type, handleSelectPost);
}

export function* withEnvSaga() {
  yield all([ call(watchInitializeBlogger), call(watchSelectPost) ]);
}

export default withEnvSaga;
