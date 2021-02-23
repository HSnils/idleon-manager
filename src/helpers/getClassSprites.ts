import { ClassType } from '../store/characters/types';

export const getClassSpriteUrl = (classType: ClassType): string => {
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

export default getClassSpriteUrl;
