import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import styles from './StatisticItem.module.scss';

export interface StatisticItemProps {
  icon: React.ReactElement;
  label: string;
  value: string | number;
}

export default function StatisticItem({
  icon,
  label,
  value,
}: StatisticItemProps) {
  return (
    <Paper className={styles.root}>
      <Box>{icon}</Box>
      <Box>
        <Typography variant="h5" align="right">{value}</Typography>
        <Typography variant="caption">{label}</Typography>
      </Box>
    </Paper>
  );
}
