import couterSaga from 'features/counter/couterSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  console.log('Saga is running!');

  yield all([couterSaga()]);
}
