import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import React, { useEffect } from 'react';
import theme from 'themes';
import { login, selectIsLogging } from '../authSilce';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  box: {
    padding: theme.spacing(2),
  },
});

export default function LoginPage() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const history = useHistory();
  const isLogging = useAppSelector(selectIsLogging);

  useEffect(() => {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));

    if (isLoggedIn) {
      history.push('admin');
    }
  }, [history]);

  const handleLoginClick = () => {
    dispatch(
      login({
        username: '',
        password: '',
      })
    );
  };

  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>

        <Box mt={4}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLoginClick}
          >
            {isLogging && <CircularProgress size={20} color="secondary" />}
            &nbsp; Fake Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
