import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ListParams, ListResponse, PaginationParams } from 'models/common';
import { Student } from 'models/student';

export interface studentState {
  loading: Boolean;
  list: Student[];
  filter: ListParams;
  pagination: PaginationParams;
}

const initialState: studentState = {
  loading: false,
  list: [],
  filter: {
    _page: 1,
    _limit: 10,
  },
  pagination: {
    _limit: 10,
    _page: 1,
    _total: 0,
    _totalRows: 0,
  },
};

const studentSlice = createSlice({
  name: 'student',
  initialState: initialState,
  reducers: {
    fetchData(state, action: PayloadAction<ListParams>) {
      state.loading = true;
    },
    fetchDataSusscess(state, action: PayloadAction<ListResponse<Student>>) {
      state.loading = false;
      state.list = action.payload.data;
      state.pagination = action.payload.pagination;
    },
    fetchDataFail(state) {
      state.loading = false;
    },

    setList(state, action: PayloadAction<Student[]>) {
      state.list = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

// Actions
export const studentActions = studentSlice.actions;

// Selector
export const selectStudentLoading = (state: RootState) => state.student.loading;
export const selectStudentList = (state: RootState) => state.student.list;
export const selectStudentFilter = (state: RootState) => state.student.filter;
export const selectStudentPagination = (state: RootState) =>
  state.student.pagination;

const studentReducer = studentSlice.reducer;

export default studentReducer;
