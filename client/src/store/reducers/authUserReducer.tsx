import * as types from '../actionTypes';
import {AuthUserType} from '../../typeTS/initialState'

const initialState: AuthUserType = {
  userId: null,
  email: '',
  nick: '',
  auth: false,
}

const authUserReducer = (state = initialState, action: { type: any; payload: any; }) => {
  const { type, payload } = action;
  const newState = { ...state };

  switch (type) {
    case types.SIGN_UP_USER:
    case types.SIGN_IN_USER:
      const user = payload.checkUser;
    return {
      ...newState,
      userId: user.id,
      email: user.email,
      nick: user.nickName,
      auth: true,
    }

    case types.SIGN_OUT_USER:
      localStorage.removeItem('store');
    return { ...newState,
      userId: null,
      email: '',
      nick: '',
      auth: false
    }
    default:
      return state;
  }
};

export default authUserReducer;
