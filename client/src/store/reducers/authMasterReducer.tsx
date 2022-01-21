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
      const master = payload.checkUser;
      return { 
        ...newState,
        masterId: master.id,
        name: master.name,
        email: master.email,
        auth: true }
    
    case types.SIGN_OUT_MASTER:
      localStorage.removeItem('store');
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
