import {
  all,
  call
} from 'redux-saga/effects';
import {
  watchInitializeDB
} from '../components/hoc/withEnv.saga';


export default function* rootSaga() {
  yield call(watchInitializeDB);
};

// https://github.com/redux-saga/redux-saga/issues/160
