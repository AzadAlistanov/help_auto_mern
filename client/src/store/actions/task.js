import * as types from '../actionTypes';

export function authInitAC(payload) {
  return {
    type: types.AUTH_SUCCESS,
    payload,
  };
}

export function authSuccessAC(payload) {
  return {
    type: types.AUTH_SUCCESS,
    payload,
  };
}

export function authErrorAC(payload) {
  return {
    type: types.AUTH_ERROR,
    payload,
  };
}

export function addOrderSuccessAC(payload) {
  return {
    type: types.ADD_ORDER_SUCCESS,
    payload,
  };
}

export function addOrderErrorAC(payload) {
  return {
    type: types.ADD_ORDER_ERROR,
    payload,
  };
}

export function initPostAC() {
  return {
    type: types.INIT_POST,
  };
}

export function initPostSuccessAC(payload) {
  return {
    type: types.INIT_POST_SUCCESS,
    payload,
  };
}

export function initPostErrorAC(payload) {
  return {
    type: types.INIT_POST_ERROR,
    payload,
  };
}

export function createPostAC() {
  return {
    type: types.CREATE_POST,
  };
}

export function createPostSuccessAC(payload) {
  return {
    type: types.CREATE_POST_SUCCESS,
    payload,
  };
}

export function createPostErrorAC(payload) {
  return {
    type: types.CREATE_POST_ERROR,
    payload,
  };
}
