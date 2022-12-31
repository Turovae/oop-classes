import Bowman from '../bowman';

test('test correct bowman', () => {
  expect(new Bowman('bowman')).toEqual({
    name: 'bowman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
