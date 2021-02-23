import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character, CharactersState } from './types';

const initialState: CharactersState = {
  characters: [],
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<Character[]>) => {
      state.characters = action.payload;
    },
  },
});

export const { actions } = charactersSlice;
export default charactersSlice.reducer;
