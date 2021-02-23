import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import Characters from '../../components/characters';
import { actions as charactersActions } from '../../store/characters/slice';
import { ClassType } from '../../store/characters/types';

const Header = () => (<Typography variant="h1" gutterBottom>Idleon Manager</Typography>);
export const Landingpage: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  dispatch(charactersActions.setCharacters([{
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
  }]));

  return (
    <Box>
      <Header />
      <Characters />
    </Box>
  );
};

export default Landingpage;
