import {
  FormControl,
  InputLabel, MenuItem, Select as MaterialSelect, SelectProps as MaterialSelectProps,
} from '@material-ui/core';
import { Field, FieldProps } from 'formik';
import React from 'react';

interface Option {
  value: string | number,
  label: string,
}

interface SelectProps extends MaterialSelectProps {
  variant?: 'filled' | 'outlined'
  options: Option[],
}

export const Select: React.FC<SelectProps> = ({
  id, name, options, label, ...props
}: SelectProps) => (
  <Field name={name}>

    {({ field }: FieldProps) => (
      <FormControl>
        <InputLabel id={`${id}-select-label`}>{label}</InputLabel>
        <MaterialSelect {...props} {...field} labelId={`${id}-select-label`}>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </MaterialSelect>
      </FormControl>
    )}
  </Field>
);

Select.defaultProps = {
  variant: 'filled',
};

export default Select;
