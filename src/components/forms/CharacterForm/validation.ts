import * as Yup from 'yup';
import { CharacterFormFields } from '.';
import { ClassType } from '../../../store/characters/types';

const isMoreThanZero = (value: number | undefined): boolean => (value ? value > 0 : false);
const isLongerThanZero = (value: string | undefined): boolean => (value ? value.length > 0 : false);
const CANT_BE_LESS_THAN_ZERO = 'Can\'t be less than 1';
const validationObject = {
  slot: Yup.number()
    .required('Character slot is required')
    .test('minimum', CANT_BE_LESS_THAN_ZERO, isMoreThanZero),
  name: Yup.string()
    .required('Name is required')
    .test('minLenght', 'Name has to be atleast one character', isLongerThanZero),
  level: Yup.number()
    .required('Level is required')
    .test('minimum', CANT_BE_LESS_THAN_ZERO, isMoreThanZero),
  defence: Yup.number()
    .required('Defence is required')
    .test('minimum', CANT_BE_LESS_THAN_ZERO, isMoreThanZero),
  accuracy: Yup.number()
    .required('Accuracy is required')
    .test('minimum', CANT_BE_LESS_THAN_ZERO, isMoreThanZero),
  classType: Yup.mixed().oneOf(Object.values(ClassType)),
};

// eslint-disable-next-line max-len
export const validationSchema = (): Yup.SchemaOf<CharacterFormFields> => Yup.object(validationObject).defined();

export default validationSchema;
