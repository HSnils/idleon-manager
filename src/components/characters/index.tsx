import {
  Avatar, Card, CardHeader, Grid,
} from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../app/rootReducer';
import { ClassType } from '../../store/characters/types';

export const Characters: React.FC = (): React.ReactElement => {
  const { characters } = useSelector((state: ReduxState) => state.characters);

  return (
    <div>
      <Grid container spacing={4}>
        {characters && characters.map((character) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card key={character.name}>
              <CardHeader
                avatar={<Avatar aria-label="Class sprite" src={getClassSpriteUrl(character.classType)} alt={`${character.classType} sprite`} />}
                title={character.name}
                subheader={`${character.classType} Lv.${character.level}`}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const getClassSpriteUrl = (classType: ClassType): string => {
  switch (classType) {
    case ClassType.JOURNEYMAN:
      return 'https://static.miraheze.org/idleonwiki/a/a4/Journeyman.png';
    case ClassType.WARRIOR:
      return 'https://static.miraheze.org/idleonwiki/9/96/Warrior2.png';
    case ClassType.BARBARIAN:
      return 'https://static.miraheze.org/idleonwiki/e/e6/Barbarian2.png';
    case ClassType.SQUIRE:
      return 'https://static.miraheze.org/idleonwiki/d/d3/Squire2.png';
    case ClassType.ARCHER:
      return 'https://static.miraheze.org/idleonwiki/a/a6/Archer2.png';
    case ClassType.BOWMAN:
      return 'https://static.miraheze.org/idleonwiki/3/30/Bowman.png';
    case ClassType.HUNTER:
      return 'https://static.miraheze.org/idleonwiki/b/b9/Hunter2.png';
    case ClassType.MAGE:
      return 'https://static.miraheze.org/idleonwiki/2/20/Mage.png';
    case ClassType.WIZARD:
      return 'https://static.miraheze.org/idleonwiki/9/94/Wizard3.png';
    case ClassType.SHAMAN:
      return 'https://static.miraheze.org/idleonwiki/5/56/Shaman.png';
    case ClassType.BEGINNER:
    default:
      return 'https://static.miraheze.org/idleonwiki/0/09/Beginner.png';
  }
};

export default Characters;
