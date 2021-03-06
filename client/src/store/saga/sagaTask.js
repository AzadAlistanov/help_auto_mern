import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actionTypes';
import * as actions from '../actions/task';

import {
  signUpUser, signUpMaster, signInUser,
  signInMaster, signOutUser, signOutMaster,
  addOrderSuccess
} from './workers'

function* addPost(action) {
  const { payload } = action;
  try {
    const { data: { status } } = yield call(() => axios.post(`${process.env.REACT_APP_BACKEND_URL}posts`, payload));
    console.log(status)
    yield put(actions.createPostSuccessAC(status));
  } catch (e) {
    yield put(actions.createPostErrorAC(e));
  }
}

function* initPost(action) {
  const { payload } = action;
  try {
    const { data: { posts } } = yield call(() => axios.get(`${process.env.REACT_APP_BACKEND_URL}posts/${payload}`));
    yield put(actions.initPostSuccessAC(posts));
  } catch (e) {
    yield put(actions.initPostErrorAC(e));
  }
}


export default function* tasksSaga() {
  yield takeEvery(types.SIGN_UP_USER_SUCCESS, signUpUser);
  yield takeEvery(types.SIGN_UP_MASTER_SUCCESS, signUpMaster);
  yield takeEvery(types.SIGN_IN_USER_SUCCESS, signInUser);
  yield takeEvery(types.SIGN_IN_MASTER_SUCCESS, signInMaster);

  yield takeEvery(types.SIGN_OUT_USER_SUCCESS, signOutUser);
  yield takeEvery(types.SIGN_OUT_MASTER_SUCCESS, signOutMaster);

  yield takeEvery(types.ADD_ORDER_SUCCESS, addOrderSuccess);

  yield takeEvery(types.CREATE_POST, addPost);
  yield takeEvery(types.INIT_POST, initPost);
}
