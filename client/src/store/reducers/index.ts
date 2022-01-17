import { combineReducers } from 'redux';
import authUserReducer from './authUserReducer';
import authMasterReducer from './authMasterReducer';
import postReducer from './postReducer';
import orderReducer from './orderReducer';

const reducersSpec = {
  authUser: authUserReducer,
  authMaster: authMasterReducer,
  post: postReducer,
  order: orderReducer,
};

const rootReducer = combineReducers(reducersSpec);

export default rootReducer;
