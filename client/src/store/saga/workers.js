import { takeEvery, call, put } from 'redux-saga/effects';
import axios from "axios";
import * as actions from '../actions/task'


export function* getInitAuth(payload) {
  const checkUser = payload.payload
  console.log(checkUser)
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
  yield put(actions.getInitAuthAC(data));
}

export function* getInitAuthMaster(payload) {
  const checkUser = payload.payload
  console.log(checkUser)
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
  yield put(actions.getInitAuthAC(data));
}

export function* logout(payload) {

  const data = yield call(
    (async function () {
      const options = {
        method: 'POST',
        
        credentials: 'include',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', },
      };
      
      
      const response = await fetch('http://localhost:5000/logout', options);
      
        
      
    })
  );
  console.log(123)
  yield put(actions.getLogoutAC());
}



export function* getSignInUser(payload) {
  const checkUser = payload.payload
  console.log(checkUser)
  const data = yield call(
    (async function () {
      console.log(`value`, checkUser)
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
  console.log(`data`, data)
  yield put(actions.getInitAuthAC(data));
}


export function* getSignInMaster(payload) {
  const checkUser = payload.payload
  
  const data = yield call(
    (async function () {
      console.log(`value`, checkUser)
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
  yield put(actions.getInitAuthAC(data));
}

export function* addOrderSuccess(payload) {
  const order = payload.payload
  console.log('payload', order);
  yield call(
    (async function () {
      await axios.post('http://localhost:5000/servicelist/neworder', order)
    })
  ) 
  yield put(actions.addOrderSuccessAC(order));
}
