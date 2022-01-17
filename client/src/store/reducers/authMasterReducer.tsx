import * as types from '../actionTypes';
import {AuthMasterType} from '../../typeTS/initialState'

const initialState: AuthMasterType = { 
  masterId: null,
  name: null,
  email: '',
  isAuth: false,
}

const authMasterReducer = (state = initialState, action: { type: any; payload: any; }) => {
  const { type, payload } = action;
  const newState = { ...state };

  switch (type) {
    case types.SIGN_UP_MASTER:    
    case types.SIGN_IN_MASTER:
      return { 
        ...newState,
        masterId: payload.checkUser.id,
        name:payload.checkUser.name,
        email: payload.checkUser.email,
        auth: true }
    
    case types.SIGN_OUT_MASTER:    
    return { ...newState,
      masterId: '',
      name: '',
      email: '',
      auth: false }
    default:
      return state;
  }
};

export default authMasterReducer;
