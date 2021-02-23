import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Character } from '../../../store/characters/types';

import { actions } from '../../../store/characters/slice';
import { CharacterFormFields } from '.';

export const useAddOrUpdateCharacter = (
  character?: Character,
): ((values: CharacterFormFields) => void
  ) => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (values: CharacterFormFields) => {
    if (character) {
      dispatch(actions.updateCharacter({ ...character, ...values }));
    } else {
      dispatch(actions.addCharacter(createNewCharacter(values)));
    }
    history.push('/');
  };
};

const createNewCharacter = (formValues: CharacterFormFields):Character => ({
  name: formValues.name,
  level: formValues.level,
  defence: formValues.defence,
  accuracy: formValues.accuracy,
  classType: formValues.classType,
});

export default { useAddOrUpdateCharacter };