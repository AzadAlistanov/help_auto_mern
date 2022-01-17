import { takeEvery, call, put } from 'redux-saga/effects';
import * as types from '../actionTypes';
import { 
  signUpUser, signUpMaster, signInUser,
  signInMaster, signOutUser, signOutMaster,
  addOrderSuccess
} from './workers'

export default function* tasksSaga() {
  yield takeEvery(types.SIGN_UP_USER_SUCCESS, signUpUser);
  yield takeEvery(types.SIGN_UP_MASTER_SUCCESS, signUpMaster);  

  yield takeEvery(types.SIGN_IN_USER_SUCCESS, signInUser);
  yield takeEvery(types.SIGN_IN_MASTER_SUCCESS, signInMaster);

  yield takeEvery(types.SIGN_OUT_USER_SUCCESS, signOutUser);
  yield takeEvery(types.SIGN_OUT_MASTER_SUCCESS, signOutMaster);

  yield takeEvery(types.ADD_ORDER_SUCCESS, addOrderSuccess);
}


