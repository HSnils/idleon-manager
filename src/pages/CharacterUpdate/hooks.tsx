import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { ReduxState } from '../../app/rootReducer';
import { Character } from '../../store/characters/types';

export const getCharacter = (): Character | undefined => {
  const { characterName } = useParams<{ characterName: string }>();
  const { characters } = useSelector((state: ReduxState) => state.characters);
  return characters.find((character: Character) => character.name === characterName);
};

export default getCharacter;
