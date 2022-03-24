import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Student } from 'models/student';

export interface DashboardStatistics {
  maleCount: number;
  femaleCount: number;
  highMarkCount: number;
  lowMarkCount: number;
}

export interface DashboardState {
  loading: boolean;
  statistics: DashboardStatistics;
  hightestStudentList: Student[];
  lowestStudentList: Student[];
}

const initialState: DashboardState = {
  loading: false,
  statistics: {
    maleCount: 0,
    femaleCount: 0,
    highMarkCount: 0,
    lowMarkCount: 0,
  },
  hightestStudentList: [],
  lowestStudentList: [],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: initialState,
  reducers: {
    fetchData(state) {
      state.loading = true;
    },
    fetchDataSuccess(state) {
      state.loading = false;
    },
    fetchDataFailed(state) {
      state.loading = false;
    },

    setStatistics(state, action: PayloadAction<DashboardStatistics>) {
      state.statistics = action.payload;
    },
    setHighestStudentList(state, action: PayloadAction<Student[]>) {
      state.hightestStudentList = action.payload;
    },
    setLowestStudentList(state, action: PayloadAction<Student[]>) {
      state.lowestStudentList = action.payload;
    },
  },
});

// Actions
export const dashboardActions = dashboardSlice.actions;

// Selectors
export const seleteLoading = (state: RootState) => state.dashboard.loading;
export const seleteStatistics = (state: RootState) =>
  state.dashboard.statistics;
export const seleteHighestStudentList = (state: RootState) =>
  state.dashboard.hightestStudentList;
export const seletelowestStudentList = (state: RootState) =>
  state.dashboard.lowestStudentList;

// Reducer
const dashboardReducer = dashboardSlice.reducer;

export default dashboardReducer;
