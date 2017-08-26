import { takeEvery, call, put, all } from 'redux-saga/effects';
import dsm, { initializeBlog, postSelected, reportSuccess, reportError } from './reducer';
import initialize from '../../../store/api';
import Router from 'next/router';
const log = (...args) => console.log(...args);
const goToBlog = () => Router.push('/blog');

// subroutines

export function* handleSelectPost(action) {
  try {
    const { payload } = action;
    const post = yield call(initialize.selectPost, payload);
    yield (reportSuccess(post));
  } catch (e) {
    yield call(log, `Error while retreiving blog post: ${e}`); 
  }
}
function* watchSelectPost() {
  yield takeEvery(initializeBlog().type, handleSelectPost);
}

export default watchSelectPost;
