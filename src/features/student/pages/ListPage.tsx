import { Button, LinearProgress, Pagination, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { ListParams } from 'models/common';
import { Student } from 'models/student';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import StudentFilter from '../component/StudentFilter';
import StudentTable from '../component/StudentTable';
import {
  selectStudentFilter,
  selectStudentList,
  selectStudentLoading,
  selectStudentPagination,
  studentActions,
} from '../studentSlice';
import styles from './ListPage.module.scss';

export default function ListPage() {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const loading = useAppSelector(selectStudentLoading);
  const list = useAppSelector(selectStudentList);
  const filter = useAppSelector(selectStudentFilter);
  const pagination = useAppSelector(selectStudentPagination);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(studentActions.setFilter({ ...filter, _page: value }));
  };

  useEffect(() => {
    dispatch(studentActions.fetchData(filter));
  }, [dispatch, filter]);

  const onChange = (filter: ListParams) => {
    dispatch(studentActions.setFilter(filter));
  };

  const onSearchChange = (filter: ListParams) => {
    dispatch(studentActions.setFilter(filter));
  };

  const onRemoveStudent = (student: Student) => {
    if (student.id) {
      dispatch(studentActions.removeStudent(student.id));
    }
  };

  return (
    <Box className={styles.root}>
      {loading && <LinearProgress className={styles.loading}></LinearProgress>}

      <Box className={styles['title-container']}>
        <Typography variant="h4">Students</Typography>
        <Button
          variant="contained"
          onClick={() => history.push('/admin/students/add')}
        >
          Add
        </Button>
      </Box>

      {/* Student Filter */}
      <Box mt={4}>
        <StudentFilter
          filter={filter}
          onChange={onChange}
          onSearchChange={onSearchChange}
        ></StudentFilter>
      </Box>

      {/* Student Table */}
      <Box mt={4}>
        <StudentTable
          studentList={list}
          onRemove={onRemoveStudent}
        ></StudentTable>
      </Box>

      {/* Pagination */}
      <Box mt={2}>
        <Pagination
          count={Math.ceil(pagination?._totalRows / pagination?._limit)}
          page={filter._page}
          onChange={handleChange}
          color="primary"
        />
      </Box>
    </Box>
  );
}
