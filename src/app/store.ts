import createSagaMiddleware from '@redux-saga/core';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import authReducer from 'features/auth/authSilce';
import dashboardReducer from 'features/dashboard/dashboardSlice';
import { history } from 'utils';
import counterReducer from '../features/counter/counterSlice';
import rootSaga from './rootSaga';

const sageMiddleware = createSagaMiddleware();

const rootReducer = {
  router: connectRouter(history),
  counter: counterReducer,
  auth: authReducer,
  dashboard: dashboardReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddware) => {
    return getDefaultMiddware().concat(
      sageMiddleware,
      routerMiddleware(history)
    );
  },
});

sageMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
