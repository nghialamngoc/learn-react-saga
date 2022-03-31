import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import React from 'react';
import { Control, useController } from 'react-hook-form';

export interface SelectOption {
  label?: string;
  value: number | string;
}

export interface SelectFieldProps {
  name: string;
  control: Control<any>;
  label?: string;
  disabled?: boolean;
  options: SelectOption[];
}

export function SelectField({
  name,
  control,
  label,
  options,
}: SelectFieldProps) {
  const {
    field: { value, onChange, onBlur },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  return (
    <FormControl fullWidth margin="normal" error={invalid}>
      <InputLabel id={label}>City</InputLabel>
      <Select
        labelId={label}
        value={value}
        label={label}
        onChange={onChange}
        onBlur={onBlur}
      >
        {options.map((x, index) => {
          return (
            <MenuItem key={index} value={x.value}>
              {x.label}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
}
