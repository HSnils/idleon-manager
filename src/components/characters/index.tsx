import {
  Avatar, Card, CardHeader, Grid, Button, IconButton, CardContent,
} from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import { ReduxState } from '../../app/rootReducer';
import getClassSpriteUrl from '../../helpers/getClassSprites';

export const Characters: React.FC = (): React.ReactElement => {
  const { characters } = useSelector((state: ReduxState) => state.characters);
  const history = useHistory();
  const handleAddCharacterClick = () => {
    history.push('/add');
  };

  const handleEditClick = (characterName: string) => {
    history.push(`/edit/${characterName}`);
  };

  return (
    <div>
      <Grid container spacing={4}>
        {characters && characters.map((character) => (
          <Grid item xs={12} sm={6} md={4} key={character.name}>
            <Card>
              <CardHeader
                avatar={<Avatar aria-label="Class sprite" src={getClassSpriteUrl(character.classType)} alt={`${character.classType} sprite`} />}
                action={(
                  <IconButton aria-label="settings" onClick={() => handleEditClick(character.name)}>
                    <EditIcon />
                  </IconButton>
                )}
                title={character.name}
                subheader={`${character.classType} Lv.${character.level}`}
              />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    {`Defence: ${character.defence}`}
                  </Grid>
                  <Grid item xs={6}>
                    {`Accuracy: ${character.accuracy}`}
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleAddCharacterClick}>Add character</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Characters;
