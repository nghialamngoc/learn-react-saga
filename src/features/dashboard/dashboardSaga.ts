import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import studentApi from 'api/studentApi';
import { ListResponse } from 'models/common';
import { Student } from 'models/student';
import { dashboardActions } from './dashboardSlice';

function* fetchStatistics() {
  const responseList: Array<ListResponse<Student>> = yield all([
    call(studentApi.getAll, { _page: 1, _limit: 1, gender: 'male' }),
    call(studentApi.getAll, { _page: 1, _limit: 1, gender: 'female' }),
    call(studentApi.getAll, { _page: 1, _limit: 1, mark_gte: 8 }),
    call(studentApi.getAll, { _page: 1, _limit: 1, mark_lte: 5 }),
  ]);

  console.log(responseList);

  const statisticList = responseList.map((x) => x.pagination._totalRows);
  const [maleCount, femaleCount, highMarkCount, lowMarkCount] = statisticList;

  yield put(
    dashboardActions.setStatistics({
      maleCount,
      femaleCount,
      highMarkCount,
      lowMarkCount,
    })
  );
}

function* fetchHighestStudentList() {
  const { data }: ListResponse<Student> = yield call(studentApi.getAll, {
    _page: 1,
    _limit: 5,
    _sort: 'mark',
    _order: 'desc',
  });

  yield put(dashboardActions.setHighestStudentList(data));
}

function* fetchLowestStudentList() {
  const { data }: ListResponse<Student> = yield call(studentApi.getAll, {
    _page: 1,
    _limit: 5,
    _sort: 'mark',
    _order: 'asc',
  });

  yield put(dashboardActions.setLowestStudentList(data));
}

function* fetchDashboardData() {
  try {
    yield all([
      call(fetchStatistics),
      call(fetchHighestStudentList),
      call(fetchLowestStudentList),
    ]);

    yield put(dashboardActions.fetchDataSuccess());
  } catch (err) {
    console.log('Failed to fetch dashboard data', err);
    yield put(dashboardActions.fetchDataFailed());
  }
}

const dashboardSaga = function* () {
  yield takeLatest(dashboardActions.fetchData, fetchDashboardData);
};

export default dashboardSaga;
