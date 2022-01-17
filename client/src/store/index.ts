import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import rootSaga from './saga';
import { State } from '../typeTS/initialState';
const sagaMiddleware = createSagaMiddleware();

const initialState: State = {
  authUser: {    
    userId: null,
    email: '',
    auth: false,
  },
  authMaster: {
    masterId: null,
    name: null,
    email: '',
    isAuth: false,
  },
  post: {
    isLoading: false,
    posts: [],
    error: null,
  },
  order: {
    name: '',
    status: false,
    service_id: null,
    user_id: null,
    master_id: null,
    error: null,
  }
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
