import * as types from '../actionTypes';

const authReducer = (state = {}, action) => {
  const { type, payload } = action;
  const newState = { ...state };

  switch (type) {

    
    case types.GET_AUTH:    
    console.log(`newState`, { ...newState, userId: payload.checkUser.id, email: payload.checkUser.email,auth: true })
    return { ...newState,  userId: payload.checkUser.id, email: payload.checkUser.email, auth: true }
    case types.GET_LOGOUT:    
    console.log(123) 
    console.log(`newState`, { ...newState, userId: '', email: '',auth: false })
    return { ...newState, userId: '', email: '',auth: false }
    default:
      return state;
  }
};

export default authReducer;
