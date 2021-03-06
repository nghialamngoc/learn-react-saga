import { call, delay, fork, put, take } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';
import { User } from 'models/user';
import { login, LoginPayload, loginSuccess, logout } from './authSilce';

function* handleLogin(payload: LoginPayload) {
  yield delay(1000);
  const user: User = {
    id: '1',
    name: 'Nghia',
  };
  yield put(loginSuccess(user));
  localStorage.setItem('access_token', 'fake_token');
  // Redirect to admin page
  yield put(push('/admin'));
}

function* handleLogout() {
  yield delay(1000);
  localStorage.removeItem('access_token');
  // Redirect to login page
  yield put(push('/login'));
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(login.toString());
      yield call(handleLogin, action.payload);
    }

    yield take(logout.toString());
    yield call(handleLogout);
  }
}

export function* authSaga() {
  yield fork(watchLoginFlow);
}
