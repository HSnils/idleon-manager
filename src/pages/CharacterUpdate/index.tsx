import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { CharacterForm } from '../../components/forms/CharacterForm';
import { getCharacter } from './hooks';

export const CharacterUpdate: React.FC = (): React.ReactElement => {
  const character = getCharacter();

  return (
    <Box>
      <Typography variant="h1" gutterBottom>{character ? `Edit ${character.name}` : 'Add Character'}</Typography>
      <CharacterForm character={character} />
    </Box>
  );
};

export default CharacterUpdate;
