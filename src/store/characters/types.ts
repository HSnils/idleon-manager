export interface CharactersState {
  characters: Character[]
}

export interface Character {
  name: string;
  classType: ClassType;
  level: number;
  defence: number;
  accuracy: number;
  skills?: Skills
}

export enum ClassType {
  BEGINNER = 'Beginner',
  JOURNEYMAN = 'Journeyman',
  WARRIOR = 'Warrior',
  BARBARIAN = 'Barbarian',
  SQUIRE = 'Squire',
  ARCHER = 'Archer',
  BOWMAN = 'Bowman',
  HUNTER = 'Hunter',
  MAGE = 'Mage',
  WIZARD = 'Wizard',
  SHAMAN = 'Shaman'
}

interface Skills {
  mining?: Skill;
  chopping?: Skill;
  fishing?: Skill;
  catching?: Skill;
  smithing?: AnvilStats;
  alchemy?: Skill;
}

interface Skill {
  level: number;
}

interface AnvilStats extends Skill {
  bonusExp: number;
  speedPerHour: number;
  capacity: number;
}
