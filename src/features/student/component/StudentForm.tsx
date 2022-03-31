import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { useAppSelector } from 'app/hooks';
import {
  InputField,
  RadioGroupField,
  SelectField,
} from 'components/FormFields';
import { selecteCityList } from 'features/city/citySlice';
import { Student } from 'models/student';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export interface StudentFormProps {
  initialValues?: Student;
  onSubmit?: (formValue: Student) => void;
}

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .nullable()
    .required('Name is required')
    .min(2, 'Name least two words'),
  age: yup
    .number()
    .positive('Please enter a positive number')
    .min(18, 'Min is 18')
    .max(60, 'Max is 60')
    .integer('Please enter an integer')
    .required('Age is required')
    .typeError('Age must be number type'),
  gender: yup
    .string()
    .oneOf(['male', 'female'], 'Please select gender')
    .required('Gender is required'),
  city: yup.string().required('City is required'),
  mark: yup
    .number()
    .min(0, '>= 0')
    .max(10, '<= 10')
    .required('Mark is required')
    .typeError('Age must be number type'),
});

export default function StudentForm({
  initialValues,
  onSubmit,
}: StudentFormProps) {
  const { control, handleSubmit } = useForm<Student>({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });
  const cityList = useAppSelector(selecteCityList);

  const handleFormSubmit = (data: Student) => {
    onSubmit?.(data);
  };

  return (
    <Box maxWidth={400}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        {/*FORM FIELDS */}
        <InputField
          name="name"
          control={control}
          label="Full Name"
        ></InputField>

        <RadioGroupField
          name="gender"
          control={control}
          options={[
            {
              label: 'Female',
              value: 'female',
            },
            {
              label: 'Male',
              value: 'male',
            },
          ]}
        ></RadioGroupField>

        <InputField name="age" control={control} label="Age"></InputField>

        <InputField name="mark" control={control} label="Mark"></InputField>

        <SelectField
          label="City"
          name="city"
          control={control}
          options={cityList.map((x) => ({ label: x.name, value: x.code }))}
        ></SelectField>

        <Box mt={3}>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
}
