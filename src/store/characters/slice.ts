import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
    addCharacter: (state, action: PayloadAction<Character>) => {
      state.characters.push(action.payload);
      updateLocalStorage(state.characters);
    },
    updateCharacter: (state, action: PayloadAction<Character>) => {
      const updatedCharacter = action.payload;
      const index = state.characters.findIndex(
        (character) => character.name === updatedCharacter.name,
      );
      state.characters[index] = updatedCharacter;
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
