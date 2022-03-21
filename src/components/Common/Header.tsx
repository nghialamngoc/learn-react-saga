import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useAppDispatch } from 'app/hooks';
import { logout } from 'features/auth/authSilce';
import * as React from 'react';

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const dispatch = useAppDispatch();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Student Management
          </Typography>
          <Button color="inherit" onClick={() => dispatch(logout())}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
