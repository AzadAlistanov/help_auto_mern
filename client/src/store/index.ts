import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers';
import rootSaga from './saga';
import {State} from '../typeTS/initialState';

const sagaMiddleware = createSagaMiddleware();


// const store = configureStore({ reducer: rootReducer, preloadedState: initState(), middleware: [thunk], });

const initState = () => {

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
      status: '',
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
  return JSON.parse(localStorage.getItem('store') || '{}') || initialState;
};

const store = createStore(
  rootReducer,
  initState(),
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

store.subscribe(() => { localStorage.setItem('store', JSON.stringify(store.getState()))})




sagaMiddleware.run(rootSaga);

export default store;
