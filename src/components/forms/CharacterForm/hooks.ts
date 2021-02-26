import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Character } from '../../../store/characters/types';

import { actions } from '../../../store/characters/slice';
import { CharacterFormFields } from '.';
import { CharacterWithSlot } from './types';

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

const createNewCharacter = (formValues: CharacterFormFields): CharacterWithSlot => ({
  slot: formValues.slot,
  name: formValues.name,
  level: formValues.level,
  defence: formValues.defence,
  accuracy: formValues.accuracy,
  classType: formValues.classType,
});

export const useDeleteCharacter = (character?: Character)
  : ((event: any) => void) => {
  const dispatch = useDispatch();
  const history = useHistory();
  return () => {
    if (character) {
      dispatch(actions.removeCharacter(character));
      history.push('/');
    }
  };
};

export default { useAddOrUpdateCharacter, useDeleteCharacter };
