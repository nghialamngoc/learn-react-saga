import { delay, put, takeEvery, takeLatest } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  increment,
  incrementSage,
  incrementSageSusscess,
} from './counterSlice';

function logger(action: PayloadAction) {
  console.log('log', action);
}

function* handleIncreamentSage(action: PayloadAction<number>) {
  console.log('handleIncreamentSage');

  yield delay(2000);

  console.log('Waiting done');

  yield put(incrementSageSusscess(action.payload));
}

export default function* couterSaga() {
  console.log('couter sage');

  yield takeEvery(increment().type, logger);
  yield takeLatest(incrementSage.toString(), handleIncreamentSage);
}
