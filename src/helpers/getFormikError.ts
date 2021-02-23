import { FormikProps } from 'formik';

export function getError<T>(property: keyof T, form: FormikProps<T>): any | undefined {
  return form.submitCount > 0 || form.touched[property] ? form.errors[property] : undefined;
}

export default getError;
