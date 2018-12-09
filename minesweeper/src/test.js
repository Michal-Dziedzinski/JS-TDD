const { saper, calculate, findBomb } = require('./solution');

it('empty array', () => {
  expect(() => saper([])).toThrow('it is not 2d array');
});

it('not Array', () => {
  expect(() => saper('')).toThrow('It is not an array');
});

it('Secend element not array', () => {
  expect(() => saper([[1,1,'x'], ''])).toThrow('Inside array there are not an array');
});

it('One line vertical, one bomb', () => {
  expect(saper([['x'], [0]])).toEqual([['x'], [1]]);
});

it('One bomb 2x2', () => {
  expect(saper([['x', null], [null, null]])).toEqual([['x', 1], [1, 1]]);
});


it('one bomb 3x3', () => {
  expect(calculate(1,1, [[0,0, 0], [0,'x', 0], [0, 0, 0]])).toEqual([[1,1,1],[1,'x', 1], [1, 1, 1]]);
});
it('one bomb 3x5', () => {
  expect(calculate(1,2, [[0,0, 0, 0, 0], [0, 0,'x', 0, 0], [0, 0, 0, 0, 0]])).toEqual([[0,1,1,1,0],[0,1,'x', 1,0], [0,1, 1, 1,0]]);
});

it('one bomb in first corner', () => {
  expect(calculate(0,0, [['x',0, 0, 0, 0], [0, 0,0, 0, 0], [0, 0, 0, 0, 0]])).toEqual([['x',1,0,0,0],[1,1,0, 0,0], [0,0, 0, 0,0]]);
});


it('one bomb in last corner ', () => {
  expect(calculate(2,4, [ [0, 0, 0, 0, 0],
                          [0, 0, 0 , 0, 0],
                          [0, 0, 0, 0, 'X']]))
                          .toEqual([ 
                              [0, 0, 0, 0, 0],
                              [0, 0, 0, 1, 1],
                              [0, 0, 0, 1, 'X']]);
});
it('Find bomb in array', () => {
  expect(findBomb([ ['x', 0, 0, 0, 0],
                [0, 'x', 0 , 0, 0],
                ['x', 0, 0, 0, 0],
                [0, 0, 0, 0, 0]
              ]))
                .toEqual(
                   [[0,0], [1,1], [2,0]]
                  );
});


it('Final test', () => {
  expect(saper([ ['x', 0, 0, 0],
                    [0, 'x' , 0, 0],
                    ['x', 0, 0, 0],
                    [0, 0, 0, 0]
              ]))
                .toEqual(
                  [ ['x', 2, 1, 0],
                    [3, 'x', 1 , 0],
                    ['x', 2, 1, 0],
                    [1, 1, 0, 0]]
                  );
});








// check ===
// expect(1).toBe(1)

// check deep equality
// expect([1, 2]).toEqual([1, 2])
