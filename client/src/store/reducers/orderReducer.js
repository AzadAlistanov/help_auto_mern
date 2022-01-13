import * as types from "../actionTypes";

const postReducer = (state = {}, action) => {
  const {type, payload} = action;
  const newState = {...state};

  switch (type) {
    case types.ADD_ORDER_SUCCESS: {
      return {...newState, ...payload };
    }
    case types.ADD_ORDER_ERROR: {
      return {...newState, error: payload };
    }
    default:
      return state;
  }
};

export default postReducer;
