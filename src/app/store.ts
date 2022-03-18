import createSagaMiddleware from '@redux-saga/core';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import authReducer from 'features/auth/authSilce';
import counterReducer from '../features/counter/counterSlice';
import rootSaga from './rootSaga';

const sageMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddware) => {
    return getDefaultMiddware().concat(sageMiddleware);
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
