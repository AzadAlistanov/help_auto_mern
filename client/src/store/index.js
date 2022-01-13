import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import rootSaga from './saga';
const sagaMiddleware = createSagaMiddleware();

const initialState = {
  auth: {    
    userId: '',
    email: '',
    auth: false,
  },
  post: {
    isLoading: false,
    posts: [],
    error: null,
  },
  order: {
    name: '',
    serviceId: null,
    status: false,
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
