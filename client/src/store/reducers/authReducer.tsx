import * as types from '../actionTypes';
import {AuthType} from '../../typeTS/initialState'

const initialState: AuthType = { 
  userId: null,
  email: '',
  isAuth: false,
}

const authReducer = (state = initialState, action: { type: any; payload: any; }) => {
  const { type, payload } = action;
  const newState = { ...state };

  switch (type) {
    case types.GET_AUTH:    
    return { ...newState,  userId: payload.checkUser.id, email: payload.checkUser.email, auth: true }
    case types.GET_LOGOUT:    
    return { ...newState, userId: '', email: '',auth: false }
    default:
      return state;
  }
};

export default authReducer;