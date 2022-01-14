import { OrderType } from "../../typeTS/initialState";
import * as types from "../actionTypes";

const initialState: OrderType = {
  name: '',
  status: false,
  service_id: null,
  user_id: null,
  master_id: null,
  error: null,
}

const postReducer = (state = initialState, action: { type: any; payload: any; }) => {
  const {type, payload} = action;
  const newState = {...state};
  console.log(state);
  
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
