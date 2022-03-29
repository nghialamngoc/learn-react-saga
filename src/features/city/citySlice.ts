import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { City } from 'models/city';
import { ListParams } from 'models/common';

export interface CityState {
  list: City[];
}

const initialState: CityState = {
  list: [],
};

const citySlice = createSlice({
  name: 'city',
  initialState: initialState,
  reducers: {
    fetchData(state, action: PayloadAction<ListParams>) {},
    fetchDataSuccess(state, action) {},
    fetchDataFail(state, action) {},

    setCityList(state, action: PayloadAction<Array<City>>) {
      state.list = action.payload;
    },
  },
});

// actions
export const cityActions = citySlice.actions;

// selectors
export const selecteCityList = (state: RootState) => state.city.list;

// reducer
const cityReducer = citySlice.reducer;

export default cityReducer;
