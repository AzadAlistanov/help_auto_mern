import * as types from '../actionTypes';

const authReducer = (state = {}, action) => {
  const { type, payload } = action;
  const newState = { ...state };

  switch (type) {
    case types.AUTH_SUCCESS: {
      return { ...newState, ...payload };
    }
    case types.AUTH_ERROR:
      return { ...newState, error: payload };
    default:
      return state;
  }
};

export default authReducer;
