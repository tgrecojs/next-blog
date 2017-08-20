import { takeEvery, call, put } from 'redux-saga/effects';
import {
  initializeBlog, INITIALIZE_BLOG_SUCCESS
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
    yield call(log, `Error while initializing db: ${e}`);
  }
}

// watchers
export function* watchInitializeBlogger() {
  yield takeEvery(initializeBlog().type, handleInitializeBlogger);
}

export function* withEnvSaga() {
  yield watchInitializeBlogger();
}

export default withEnvSaga;
