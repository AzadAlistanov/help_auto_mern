import { all } from 'redux-saga/effects';
import tasksSaga from './sagaTask';

export default function* rootSaga() {
  yield all([tasksSaga()]);
}
