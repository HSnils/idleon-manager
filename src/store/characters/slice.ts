import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CharacterWithSlot } from '../../components/forms/CharacterForm/types';
import { Character, CharactersState } from './types';

const getInitialValues = (): CharactersState => {
  const initialState: CharactersState = { characters: [] };
  const charactersFromStorage: string | null = localStorage.getItem('characters');
  if (charactersFromStorage) {
    initialState.characters = JSON.parse(charactersFromStorage) as Character[];
  }
  return initialState;
};

const initialState: CharactersState = getInitialValues();

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<Character[]>) => {
      state.characters = action.payload;
    },
    addCharacter: (state, action: PayloadAction<CharacterWithSlot>) => {
      state.characters.splice(action.payload.slot - 1, 0, action.payload);
      updateLocalStorage(state.characters);
    },
    updateCharacter: (state, action: PayloadAction<CharacterWithSlot>) => {
      const updatedCharacter = action.payload;
      const indexOfCharacter = state.characters.findIndex(
        (character) => character.name === updatedCharacter.name,
      );
      state.characters[indexOfCharacter] = updatedCharacter;

      const orderHasChanged = indexOfCharacter + 1 !== updatedCharacter.slot;
      if (orderHasChanged) {
        changeOrderOfCharacter(state, indexOfCharacter, updatedCharacter);
      }
      updateLocalStorage(state.characters);
    },
    removeCharacter: (state, action: PayloadAction<Character>) => {
      const updatedCharactersList = state.characters
        .filter((character) => character.name !== action.payload.name);

      state.characters = updatedCharactersList;
      updateLocalStorage(updatedCharactersList);
    },
  },
});

const updateLocalStorage = (characters: Character[]) => localStorage.setItem('characters', JSON.stringify(characters));

export const { actions } = charactersSlice;
export default charactersSlice.reducer;

function changeOrderOfCharacter(
  state: CharactersState,
  index: number,
  updatedCharacter: CharacterWithSlot,
) {
  state.characters.splice(index, 1);
  state.characters.splice(updatedCharacter.slot - 1, 0, updatedCharacter);
}
