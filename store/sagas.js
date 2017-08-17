import {
  all,
  call, put, takeLatest, takeEvery
} from 'redux-saga/effects';
import {
  watchInitializeDB
} from '../components/hoc/withEnv.saga';

import { submitPost } from './api';


function* submitPostSaga(action) {
  console.log('Action', action);
  try {
    yield call(submitPost(action));
    yield put({
      type: 'SUBMIT_WORKED'
    });
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
    call(postWatcher)
  ]);
};

// https://github.com/redux-saga/redux-saga/issues/160
