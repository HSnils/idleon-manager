import { Box, Typography } from '@material-ui/core';
import React from 'react';
import Characters from '../../components/characters';

const Header = () => (<Typography variant="h1" gutterBottom>Idleon Manager</Typography>);
export const Landingpage: React.FC = (): React.ReactElement => (
  <Box>
    <Header />
    <Characters />
  </Box>
);

export default Landingpage;
