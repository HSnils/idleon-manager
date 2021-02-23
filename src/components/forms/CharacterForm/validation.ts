import * as Yup from 'yup';
import { CharacterFormFields } from '.';
import { ClassType } from '../../../store/characters/types';

const validationObject = {
  name: Yup.string().required('Name is required').test('minLenght', 'Name has to be atleast one character', (name) => (name ? name.length > 0 : false)),
  level: Yup.number().required('Level is required').test('minimum', 'Can\'t be less than 1', (level) => (level ? level > 0 : false)),
  defence: Yup.number().required('Defence is required').test('minimum', 'Can\'t be less than 1', (defence) => (defence ? defence > 0 : false)),
  accuracy: Yup.number().required('Accuracy is required').test('minimum', 'Can\'t be less than 1', (accuracy) => (accuracy ? accuracy > 0 : false)),
  classType: Yup.mixed().oneOf(Object.values(ClassType)),
};

// eslint-disable-next-line max-len
export const validationSchema = (): Yup.SchemaOf<CharacterFormFields> => Yup.object(validationObject).defined();

export default validationSchema;
