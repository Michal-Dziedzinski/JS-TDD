const { sapper, calculate, findBomb } = require('./solution');

it('empty array', () => {
  expect(() => sapper([])).toThrow('it is not 2d array');
});

it('Not Array', () => {
  expect(() => sapper('')).toThrow('It is not an array');
});

it('Are only arrays inside', () => {
  expect(() => sapper([[0, 0, 'x'], ''])).toThrow('Inside array there are not only arrays');
});

it('One line vertical, one bomb', () => {
  expect(sapper([['x'], [0]])).toEqual([['x'], [1]]);
});

it('One bomb 2x2', () => {
  expect(sapper([['x', 0], [0, 0]])).toEqual([['x', 1], [1, 1]]);
});

it('one bomb 3x3', () => {
  expect(calculate(1, 1, [[0, 0, 0], [0,'x', 0], [0, 0, 0]])).toEqual([[1, 1, 1], [1, 'x', 1], [1, 1, 1]]);
});

it('one bomb 5x5', () => {
  expect(calculate(1, 2, [[0, 0, 0, 0, 0], [0, 0, 'x', 0, 0], [0, 0, 0, 0, 0]])).toEqual([[0, 1, 1, 1, 0], [0, 1, 'x', 1, 0], [0, 1, 1, 1, 0]]);
});

it('one bomb in top left corner', () => {
  expect(calculate(0, 0, [['x', 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]])).toEqual([['x', 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 0, 0, 0]]);
});

it('one bomb in bottom right ', () => {
  expect(calculate(2, 4, [[0, 0, 0, 0, 0], [0, 0, 0 , 0, 0], [0, 0, 0, 0, 'x']])).toEqual([[0, 0, 0, 0, 0], [0, 0, 0, 1, 1], [0, 0, 0, 1, 'x']]);
});

it('Find bomb in array', () => {
  expect(findBomb([['x', 0, 0, 0, 0], [0, 'x', 0 , 0, 0], ['x', 0, 0, 0, 0], [0, 0, 0, 0, 0]])).toEqual([[0, 0], [1, 1], [2, 0]]);
});

it('Multiple bombs in array', () => {
  expect(sapper([['x', 0, 0, 0], [0, 'x', 0, 0], ['x', 0, 0, 0], [0, 0, 0, 0]])).toEqual([['x', 2, 1, 0], [3, 'x', 1 , 0], ['x', 2, 1, 0], [1, 1, 0, 0]]);
});

it('Are incoming values 0 (not a Bomb) or x (bomb)', () => {
  expect(() => sapper([['x', 1, 0, 0], [0, 'x', 0, 0], ['x', 0, 0, 0], [0, 0, 0, 0]])).toThrow('At least one of incoming values in array is not correct');
});

// check ===
// expect(1).toBe(1)

// check deep equality
// expect([1, 2]).toEqual([1, 2])
