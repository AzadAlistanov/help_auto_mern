import * as types from '../actionTypes';

export function signUpUserAC (payload) {
  return {
    type: types.SIGN_UP_USER,
    payload
  }
};
export function signUpUserSucces (payload) {
  return {
    type: types.SIGN_UP_USER_SUCCESS,
    payload
  }
};

export function signUpMasterAC (payload) {
  return {
    type: types.SIGN_UP_MASTER,
    payload
  }
};
export function signUpMasterSucces (payload) {
  return {
    type: types.SIGN_UP_MASTER_SUCCESS,
    payload
  }
};


export function signInUserAC (payload) {
  return {
    type: types.SIGN_IN_USER,
    payload
  }
};
export function signInUserSucces (payload) {
  return {
    type: types.SIGN_IN_USER_SUCCESS,
    payload
  }
};

export function signInMasterAC (payload) {
  return {
    type: types.SIGN_IN_MASTER,
    payload
  }
};
export function signInMasterSucces (payload) {
  return {
    type: types.SIGN_IN_MASTER_SUCCESS,
    payload
  }
};

export function signOutUserAC (payload) {
  return {
    type: types.SIGN_OUT_USER,
    payload
  }
};
export function signOutUserSucces (payload) {
  return {
    type: types.SIGN_OUT_USER_SUCCESS,
    payload
  }
};

export function signOutMasterAC (payload) {
  return {
    type: types.SIGN_OUT_MASTER,
    payload
  }
};
export function signOutMasterSucces (payload) {
  return {
    type: types.SIGN_OUT_MASTER_SUCCESS,
    payload
  }
};

export const loadUserAC = (payload) => {
  return {
    type: types.USER_LOADED,
    payload
  }
};
export const loadUserSucces = (payload) => {
  return {
    type: types.USER_LOADED_SUCCESS,
    payload
  }
};

export const loadMasterAC = (payload) => {
  return {
    type: types.MASTER_LOADED,
    payload
  }
};
export const loadMasterSucces = (payload) => {
  return {
    type: types.MASTER_LOADED_SUCCESS,
    payload
  }
};
