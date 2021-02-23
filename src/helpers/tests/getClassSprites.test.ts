import { ClassType } from '../../store/characters/types';
import getClassSpriteUrl, { JOURNEYMAN_SPRITE_URL } from '../getClassSprites';

test('test that correct sprite url is returned', () => {
  const spriteUrl = getClassSpriteUrl(ClassType.JOURNEYMAN);
  expect(spriteUrl).toBe(JOURNEYMAN_SPRITE_URL);
});
