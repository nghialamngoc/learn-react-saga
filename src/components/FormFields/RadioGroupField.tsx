import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup
} from '@mui/material';
import React from 'react';
import { Control, useController } from 'react-hook-form';

export interface RadioOption {
  label?: string;
  value: number | string;
}

export interface RadioGroupFieldProps {
  name: string;
  control: Control<any>;
  label?: string;
  disabled?: boolean;
  options: RadioOption[];
}

export function RadioGroupField({
  name,
  control,
  label,
  options,
}: RadioGroupFieldProps) {
  const {
    field: { value, onChange, onBlur },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  return (
    <FormControl margin="normal" error={invalid}>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        name={name}
        aria-labelledby="demo-radio-buttons-group-label"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        {options.map((x, index) => {
          return (
            <FormControlLabel
              key={index}
              value={x.value}
              control={<Radio />}
              label={x.label || ''}
            />
          );
        })}
      </RadioGroup>

      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
}
