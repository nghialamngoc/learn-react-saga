import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

import { User } from 'models/user';

export interface LoginPayload {
  username: string;
  password: string;
}

export interface authState {
  isLoggedIn: boolean;
  logging: boolean;
  currentUser?: User;
}

const initialState: authState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
};

const authSlide = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.logging = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoggedIn = true;
      state.logging = false;
      state.currentUser = action.payload;
    },
    loginFaild(state, action: PayloadAction<string>) {
      state.logging = false;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
  },
});

// Actions
export const { login, loginSuccess, loginFaild, logout } = authSlide.actions;

// Selector
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectIsLogging = (state: RootState) => state.auth.logging;
export const selectCurrentUser = (state: RootState) => state.auth.currentUser;

const authReducer = authSlide.reducer;
export default authReducer;
