import * as types from '../actionTypes';
import {AuthUserType} from '../../typeTS/initialState'

const initialState: AuthUserType = { 
  userId: null,
  email: '',
  auth: false,
}

const authUserReducer = (state = initialState, action: { type: any; payload: any; }) => {
  const { type, payload } = action;
  const newState = { ...state };

  switch (type) {
    case types.SIGN_UP_USER:    
    case types.SIGN_IN_USER:
      const user = payload.checkUser;
      
      // localStorage.setItem('isAuth', user);
      
    return {
      ...newState,
      userId: payload.checkUser.id,
      email: payload.checkUser.email,
      auth: true
    }
    
    case types.SIGN_OUT_USER:
      console.log('out');
      
    return { ...newState,
      userId: '',
      email: '',
      auth: false 
    }
    default:
      return state;
  }
};

export default authUserReducer;
