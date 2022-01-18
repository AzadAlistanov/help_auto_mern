import * as types from '../actionTypes';

const postReducer = (state = {}, action) => {
  const { type, payload } = action;
  const newState = { ...state };

  switch (type) {
    case types.INIT_POST:
    case types.CREATE_POST: {
      return { ...newState, isLoading: true };
    }
    case types.INIT_POST_SUCCESS: {
      return { ...newState, posts: payload, isLoading: false };
    }
    case types.CREATE_POST_SUCCESS: {
      return { ...newState, isLoading: false }; // posts: [...newState.posts, payload],
    }
    case types.INIT_POST_ERROR:
    case types.CREATE_POST_ERROR: {
      return { ...newState, error: payload };
    }
    default:
      return state;
  }
};

export default postReducer;
