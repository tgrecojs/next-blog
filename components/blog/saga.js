import { takeEvery, call, put, all } from 'redux-saga/effects';
import dsm, { initializeBlog } from './blogroll/reducer';
import initializeDb from '../../store/api';
import Router from 'next/router';
const log = (...args) => console.log(...args);
const { initialize, reportSuccess, reportError } = dsm.actionCreators;
const goToBlog = () => Router.push('/blog');
import watchSelectPost from './post/saga';
// subroutines
export function* handleInitializeBlogger(action) {
  try {
    const { payload } = action;
    const posts = yield call(initializeDb.initializeBlog, payload);
    yield put(reportSuccess(posts));
  } catch (e) {
    yield call(log, `Error while initializing blog: ${e}`);
  }
}


// watchers
export function* watchInitializeBlogger() {
  yield takeEvery(initializeBlog().type, handleInitializeBlogger);
}


export function* withEnvSaga() {
   yield all([ call(watchInitializeBlogger), call(watchSelectPost) ]);
  // yield call(watchInitializeBlogger);
}

export default withEnvSaga;
