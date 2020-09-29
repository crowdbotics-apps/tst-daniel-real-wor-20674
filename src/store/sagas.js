import {put, call, all, spawn, takeEvery} from 'redux-saga/effects';
import {apiService} from './services';
import * as types from './constants';
import * as actions from './actions';

function* deletePostWorker(action) {
  try {
    const result = yield call(apiService.deletePost, action);
    yield put(actions.deletePostSucceeded(result, action));
  } catch (err) {
    yield put(actions.deletePostFailed(err));
  }
}
function* deletePostWatcher() {
  yield takeEvery(types.DELETE_POST, deletePostWorker);
}

export default function* rootSaga() {
  const sagas = [deletePostWatcher];
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      }),
    ),
  );
}
