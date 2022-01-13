import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actionTypes';
import * as actions from '../actions/task';
import { getInitAuth, getInitAuthMaster,getSignInUser ,getSignInMaster,logout} from './workers'

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
  yield takeEvery(types.GET_AUTH_SAGA_USER, getInitAuth);
  yield takeEvery(types.GET_AUTH_SAGA_MASTER, getInitAuthMaster);  
  yield takeEvery(types.GET_SIGNIN_SAGA_USER, getSignInUser);
  yield takeEvery(types.GET_SIGNIN_SAGA_MASTER, getSignInMaster);
  yield takeEvery(types.LOGOUT_SAGA, logout);
}


