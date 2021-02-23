import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character, CharactersState, ClassType } from './types';

const initialState: CharactersState = {
  characters: [{
    name: 'Snils',
    level: 52,
    classType: ClassType.SHAMAN,
    defence: 102,
    accuracy: 372,
  },
  {
    name: 'Valterian',
    level: 53,
    classType: ClassType.BARBARIAN,
    defence: 128,
    accuracy: 415,
  }, {
    name: 'Repins',
    level: 54,
    classType: ClassType.BOWMAN,
    defence: 87,
    accuracy: 343,
  }, {
    name: 'Graphite',
    level: 45,
    classType: ClassType.SQUIRE,
    defence: 65,
    accuracy: 198,
  }],
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<Character[]>) => {
      state.characters = action.payload;
    },
    addCharacter: (state, action: PayloadAction<Character>) => {
      state.characters.push(action.payload);
    },
    updateCharacter: (state, action: PayloadAction<Character>) => {
      const updatedCharacter = action.payload;
      const index = state.characters.findIndex(
        (character) => character.name === updatedCharacter.name,
      );
      state.characters[index] = updatedCharacter;
    },
  },
});

export const { actions } = charactersSlice;
export default charactersSlice.reducer;
