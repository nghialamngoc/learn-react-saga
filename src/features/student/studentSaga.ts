import { call, put, takeLatest } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import studentApi from 'api/studentApi';
import { ListParams, ListResponse } from 'models/common';
import { Student } from 'models/student';
import { studentActions } from './studentSlice';

function* handleFetchData(action: PayloadAction<ListParams>) {
  try {
    const response: ListResponse<Student> = yield call(
      studentApi.getAll,
      action.payload
    );

    yield put(studentActions.fetchDataSusscess(response));
  } catch (err) {
    console.log('Fail to fetch student', err);
    yield put(studentActions.fetchDataFail());
  }
}

const studentSaga = function* () {
  yield takeLatest(studentActions.fetchData, handleFetchData);
};

export default studentSaga;
