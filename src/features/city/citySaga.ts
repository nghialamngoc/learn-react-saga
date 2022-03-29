import { call, put, takeLatest } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import cityApis from 'api/cityApi';
import { City } from 'models';
import { ListParams, ListResponse } from 'models/common';
import { cityActions } from './citySlice';

function* handleFetchData(action: PayloadAction<ListParams>) {
  try {
    const res: ListResponse<City> = yield call(cityApis.getAll, action.payload);
    yield put(cityActions.setCityList(res.data));
  } catch (err) {}
}

const citySaga = function* () {
  yield takeLatest(cityActions.fetchData.toString(), handleFetchData);
};

export default citySaga;
