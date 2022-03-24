import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import styles from './Widget.module.scss';

export interface WidgetProps {
  title: string;
  children: any;
}

export default function Widget({ title, children }: WidgetProps) {
  return (
    <Paper className={styles.root}>
      <Typography variant="button">{title}</Typography>
      <Box mt={2}>{children}</Box>
    </Paper>
  );
}
