import { takeEvery } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { increment } from './counterSlice';

export function logger(action: PayloadAction) {
  console.log('log', action);
}

export default function* couterSaga() {
  console.log('couter sage');

  yield takeEvery(increment().type, logger);
}
