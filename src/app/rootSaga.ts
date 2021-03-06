import { authSaga } from 'features/auth/authSaga';
import citySaga from 'features/city/citySaga';
import dashboardSaga from 'features/dashboard/dashboardSaga';
import studentSaga from 'features/student/studentSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([authSaga(), dashboardSaga(), studentSaga(), citySaga()]);
}

// Effect: chỉ đơn giản là một javascript object có chứa thông tin để saga middleware biết cần phải làm gì.
// Effect Creator: là một function trả về một Effect. Và nó ko thực thi cái Effect này, người thực thi là saga middleware,
// chứ ko phải Effect Creator.
// Các hàm các bạn dùng trong Redux Saga: takeEvery, takeLatest, ... đây là những Effect Creator.
