import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/system';
import { useAppSelector } from 'app/hooks';
import { selecteCityList } from 'features/city/citySlice';
import { City } from 'models';
import { Student } from 'models/student';
import * as React from 'react';
import { capitalizeString, getMarkColor } from 'utils';
import styles from './StudentTable.module.scss';

export interface StudentTableProps {
  studentList: Student[];
  onEdit?: (student: Student) => void;
  onRemove?: (student: Student) => void;
}

export default function StudentTable({
  studentList,
  onEdit,
  onRemove,
}: StudentTableProps) {
  const cityList = useAppSelector(selecteCityList);

  const cityName = (cityCode: string) => {
    if (!cityList.length) return '';

    const city = cityList.find((x: City) => x.code === cityCode);

    if (city) {
      return city.name;
    }

    return '';
  };

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Mark</TableCell>
            <TableCell>City</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentList.map((student, index) => (
            <TableRow key={student.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{capitalizeString(student.gender)}</TableCell>
              <TableCell>
                <Box color={getMarkColor(student.mark)} fontWeight="bold">
                  {student.mark}
                </Box>
              </TableCell>
              <TableCell>{cityName(student.city)}</TableCell>
              <TableCell align="right" className={styles.actions}>
                <Button
                  variant="contained"
                  color="primary"
                  className={styles['edit-button']}
                  onClick={() => onEdit?.(student)}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => onRemove?.(student)}
                >
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
