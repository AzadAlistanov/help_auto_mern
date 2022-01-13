import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postReducer from './postReducer';
import orderReducer from './orderReducer';

const reducersSpec = {
  auth: authReducer,
  post: postReducer,
  order: orderReducer,
};

const rootReducer = combineReducers(reducersSpec);

export default rootReducer;
