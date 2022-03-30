import { Box } from '@mui/system';
import { Header, Sidebar } from 'components/common';
import Dashboard from 'features/dashboard';
import Student from 'features/student';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './Admin.module.scss';

export default function Admin() {
  return (
    <Box className={styles.root}>
      <Box className={styles.header}>
        <Header></Header>
      </Box>
      <Box className={styles.sidebar}>
        <Sidebar></Sidebar>
      </Box>
      <Box className={styles.main}>
        <Switch>
          <Route path="/admin/dashboard" component={Dashboard}></Route>
          <Route path="/admin/students" component={Student}></Route>
        </Switch>
      </Box>
    </Box>
  );
}
