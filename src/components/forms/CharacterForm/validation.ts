import * as Yup from 'yup';
import { CharacterFormFields } from '.';
import { ClassType } from '../../../store/characters/types';

const validationObject = {
  name: Yup.string()
    .required('Name is required')
    .test('minLenght', 'Name has to be atleast one character', (name) => (name ? name.length > 0 : false)),
  level: Yup.number()
    .required('Level is required')
    .test('minimum', 'Can\'t be less than 1', (level) => (isMoreThanZero(level))),
  defence: Yup.number()
    .required('Defence is required')
    .test('minimum', 'Can\'t be less than 1', (defence) => (isMoreThanZero(defence))),
  accuracy: Yup.number()
    .required('Accuracy is required')
    .test('minimum', 'Can\'t be less than 1', (accuracy) => (isMoreThanZero(accuracy))),
  classType: Yup.mixed().oneOf(Object.values(ClassType)),
};

// eslint-disable-next-line max-len
export const validationSchema = (): Yup.SchemaOf<CharacterFormFields> => Yup.object(validationObject).defined();

export default validationSchema;

function isMoreThanZero(value: number | undefined):
  boolean | Yup.ValidationError | Promise<boolean | Yup.ValidationError> {
  return value ? value > 0 : false;
}
