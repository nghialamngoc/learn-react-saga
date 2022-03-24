import { PeopleAlt } from '@mui/icons-material';
import { Grid, LinearProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useAppSelector } from 'app/hooks';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import StatisticItem from './components/StatisticItem';
import {
  dashboardActions,
  seleteHighestStudentList,
  seleteLoading,
  seletelowestStudentList,
  seleteStatistics,
} from './dashboardSlice';
import styles from './Dashboard.module.scss';
import Widget from './components/Widget';
import StudentRankingList from './components/StudentRankingList';

export interface DashboardProps {}

export default function Dashboard(props: DashboardProps) {
  const dispatch = useDispatch();
  const loading = useAppSelector(seleteLoading);
  const statistics = useAppSelector(seleteStatistics);
  const highestStudentList = useAppSelector(seleteHighestStudentList);
  const lowestStudentList = useAppSelector(seletelowestStudentList);

  useEffect(() => {
    dispatch(dashboardActions.fetchData());
  }, [dispatch]);

  return (
    <Box className={styles.root}>
      {/* Loading */}
      {loading && <LinearProgress className={styles.loading}></LinearProgress>}

      {/* Statistic Section */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<PeopleAlt fontSize="large"></PeopleAlt>}
            label="male"
            value={statistics.maleCount}
          ></StatisticItem>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<PeopleAlt fontSize="large"></PeopleAlt>}
            label="female"
            value={statistics.femaleCount}
          ></StatisticItem>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<PeopleAlt fontSize="large"></PeopleAlt>}
            label="mark >= 8"
            value={statistics.highMarkCount}
          ></StatisticItem>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<PeopleAlt fontSize="large"></PeopleAlt>}
            label="mark <= 5"
            value={statistics.lowMarkCount}
          ></StatisticItem>
        </Grid>
      </Grid>

      <Box mt={4}>
        <Typography variant="h4" mb={2}>All Students</Typography>

        {/* All students rankings */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <Widget title="Student with highest mark">
              <StudentRankingList
                studentList={highestStudentList}
              ></StudentRankingList>
            </Widget>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Widget title="Student with lowest mark">
              <StudentRankingList
                studentList={lowestStudentList}
              ></StudentRankingList>
            </Widget>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
