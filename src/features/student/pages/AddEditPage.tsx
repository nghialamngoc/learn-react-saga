import { Box, LinearProgress, Link } from '@mui/material';
import studentApi from 'api/studentApi';
import { Student } from 'models/student';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import StudentForm from '../component/StudentForm';
import styles from './ListPage.module.scss';

export default function AddEditPage() {
  const history = useHistory();
  const { studentId }: any = useParams();
  const [student, setStudent] = useState<Student>();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!studentId) {
      return;
    }
    (async () => {
      try {
        setLoading(true);
        const res = await studentApi.getById(studentId);
        setStudent(res);
      } catch (err) {
        //
      } finally {
        setLoading(false);
      }
    })();
  }, [studentId]);

  const onSubmit = async (formValue: Student) => {
    try {
      setLoading(true);
      if (!formValue.id) {
        await studentApi.addStudent(formValue);
      } else {
        await studentApi.updateStudent(formValue);
      }

      setLoading(false);
      history.push('/admin/students');
    } catch (err) {}
  };

  const initialValues: Student = {
    name: '',
    age: '',
    mark: '',
    gender: 'male',
    city: '',
    ...student,
  } as Student;

  return (
    <Box className={styles.root}>
      {loading && <LinearProgress className={styles.loading}></LinearProgress>}

      <Link
        className={styles.link}
        onClick={() => history.push('/admin/students')}
        underline="none"
      >
        Back to student list
      </Link>
      <Box component="h2">
        {!studentId ? 'Add new student' : 'Edit student'}
      </Box>

      {(!studentId || Boolean(student)) && (
        <Box mt={3}>
          <StudentForm
            initialValues={initialValues}
            onSubmit={onSubmit}
          ></StudentForm>
        </Box>
      )}
    </Box>
  );
}
