import { call, put } from 'redux-saga/effects';
import axios from "axios";
import * as actions from '../actions/auth';

export function* signUpUser (payload) {
  const checkUser = payload.payload
  const data = yield call(
    (async function () {
      const options = {
        method: 'POST',
        body: JSON.stringify({ checkUser }),
        credentials: 'include',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', },
      };
      const response = await fetch('http://localhost:5000/signup', options);

      const user = await response.json();
      return user

    })
  );
  yield put(actions.signUpUserAC(data));
}


export function* signUpMaster(payload) {
  const checkUser = payload.payload

  const data = yield call(
    (async function () {
      const options = {
        method: 'POST',
        body: JSON.stringify({ checkUser }),
        credentials: 'include',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', },
      };
      const response = await fetch('http://localhost:5000/mastersignup', options);
      const user = await response.json();
      return user

    })
  );
  yield put(actions.signUpMasterAC(data));
}

export function* signInUser (payload) {
  const checkUser = payload.payload
  const data = yield call(
    (async function () {
      const options = {
        method: 'POST',
        body: JSON.stringify({ checkUser }),
        credentials: 'include',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', },
      };
      const response = await fetch('http://localhost:5000/signin', options);
      const user = await response.json();
      return user
    })
  );
  yield put(actions.signInUserAC(data));
}

export function* signInMaster(payload) {
  const checkUser = payload.payload
  const data = yield call(
    (async function () {
      const options = {
        method: 'POST',
        body: JSON.stringify({ checkUser }),
        credentials: 'include',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', },
      };
      const response = await fetch('http://localhost:5000/mastersignin', options);

      const user = await response.json();
      return user
    })
  );
  console.log(`data`, data)
  yield put(actions.signInMasterAC(data));
}

export function* signOutUser() {
  yield call(
    (async function () {
      const options = {
        method: 'POST',
        credentials: 'include',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', },
      };
      await fetch('http://localhost:5000/logout', options);
    })
  );
  yield put(actions.signOutUserAC());
}

export function* signOutMaster() {

  yield call(
    (async function () {
      await axios.post('http://localhost:5000/logout')
    })
  );
  yield put(actions.signOutMasterAC());
}



export function* addOrderSuccess(payload) {
  console.log(`order`)
  const order = payload.payload
  console.log('payload', order);
  yield call(() => axios.post('http://localhost:5000/servicelist/neworder', order));
}
