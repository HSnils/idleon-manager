import { TextField, TextFieldProps } from '@material-ui/core';
import { Field, FieldProps } from 'formik';
import React from 'react';

type InputProps = TextFieldProps & {
  variant?: 'filled' | 'outlined'
}

export const Input: React.FC<InputProps> = ({ name, ...props }: InputProps) => (
  <Field name={name}>
    {({ field }: FieldProps) => (
      <TextField {...props} {...field} />
    )}
  </Field>
);

Input.defaultProps = {
  variant: 'filled',
};

export default Input;
