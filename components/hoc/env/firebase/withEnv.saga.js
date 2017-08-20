import { takeEvery, call, put } from 'redux-saga/effects';
import {
  initializeDB
} from './withEnv.reducer';
import initialize from '../../../../store/api';

const log = (...args) => console.log(...args);

// subroutines
export function* handleInitializeDB(action) {
  try {
    const { payload } = action;
    yield call(initialize.initializeDB, payload);
    yield put({ type: 'FIREBASE_WORKD'});
  } catch (e) {
    yield call(log, `Error while initializing db: ${e}`);
    yield alert('Error! Please reload the page!');    
  }
}

// watchers
export function* watchInitializeDB() {
  yield takeEvery(initializeDB().type, handleInitializeDB);
}

export default function* withEnvSaga() {
  yield watchInitializeDB();
}

// export default withEnvSaga;
