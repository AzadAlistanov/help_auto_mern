import * as types from '../actionTypes';

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

export function initPostAC(payload) {
  return {
    type: types.INIT_POST,
    payload,
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

export function createPostAC(payload) {
  return {
    type: types.CREATE_POST,
    payload,
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

// export function getInitAuthAC (payload) {
//   return {
//     type: types.GET_AUTH,
//     payload
//   }
// }
//
// export function getInitAuthSaga (payload) {
//   return {
//     type: types.GET_AUTH_SAGA_USER,
//     payload
//   }
// }
//
// export function getInitAuthSagaMaster (payload) {
//   return {
//     type: types.GET_AUTH_SAGA_MASTER,
//     payload
//   }
// }
//
// export function getSignInSagaUser (payload) {
//   return {
//     type: types.GET_SIGNIN_SAGA_USER,
//     payload
//   }
// }
//
// export function getSignInSagaMaster (payload) {
//   return {
//     type: types.GET_SIGNIN_SAGA_MASTER,
//     payload
//   }
// }
// export function logOutSaga(payload) {
//   return {
//     type: types.LOGOUT_SAGA,
//     payload
//   }
// }
//
// export function getLogoutAC (payload) {
//   return {
//     type: types.GET_LOGOUT,
//     payload
//   }
// }
