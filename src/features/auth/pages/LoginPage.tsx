import { Box, Button, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useAppDispatch } from 'app/hooks';
import * as React from 'react';
import theme from 'themes';
import { login } from '../authSilce';

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
            Fake Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
