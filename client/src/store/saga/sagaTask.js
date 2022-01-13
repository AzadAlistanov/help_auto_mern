import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actionTypes';
import * as actions from '../actions/task';

function* initAuth() {
  try {
    yield put(actions.authInitAC());
    const { data } = yield call(() => axios.get(process.env.REACT_APP_BACKEND_URL));
    yield put(actions.authSuccessAC(data));
  } catch (e) {
    yield put(actions.authErrorAC(e));
  }
}

export default function* tasksSaga() {
  yield takeEvery(types.AUTH_INIT, initAuth);
}
