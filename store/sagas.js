import {
  all,
  call, put, takeLatest, takeEvery
} from 'redux-saga/effects';
import {
  watchInitializeDB
} from '../components/hoc/env/firebase/withEnv.saga';
import bloggerSaga from '../components/blog/saga';
import api from './api';

import Router from 'next/router'

function* submitPostSaga(action) {
  console.log('Action', action);
  const { payload } = action;
  try {
    yield call(api.submitPost, payload);
    yield put({ type: 'SUBMIT_WORKED'});
  } catch (e) {
    yield put({
      type: 'SUBMIT_FAILED',
      payload: e
    });
  }
}

function* postWatcher(action) {
  yield takeEvery('FORM_SUBMITTED', submitPostSaga);
}



export default function* rootSaga() {
  yield all([
    call(watchInitializeDB),
    call(bloggerSaga),
    call(postWatcher)
  ]);
};

// https://github.com/redux-saga/redux-saga/issues/160
