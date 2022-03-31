import { Dashboard, PeopleAlt } from '@mui/icons-material';
import {
  List,
  ListItem, ListItemIcon,
  ListItemText
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

export interface SidebarProps {}

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: 'black',

    '&.active > div': {
      background: '#e1e1e1',
    },
  },
});

export function Sidebar(props: SidebarProps) {
  const classes = useStyles();
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <NavLink to="/admin/dashboard" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="Dashboard"></ListItemText>
            </ListItem>
          </NavLink>
          <NavLink to="/admin/students" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <PeopleAlt />
              </ListItemIcon>
              <ListItemText primary="Students" />
            </ListItem>
          </NavLink>
        </List>
      </nav>
    </Box>
  );
}
