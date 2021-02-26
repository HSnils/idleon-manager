import { Character } from '../../../store/characters/types';

export interface CharacterWithSlot extends Character {
  slot: number
}
