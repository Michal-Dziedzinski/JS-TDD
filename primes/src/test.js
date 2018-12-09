const { sumPrimes, isPrime } = require('./solution');

it('empty array', () => {
  expect(sumPrimes([])).toBe(0)
});

it('one element', () => {
  expect(sumPrimes([2])).toBe(2)
});

it('is Prime', () => {
  expect(isPrime(5)).toBe(true);
  expect(isPrime(4)).toBe(false);
  expect(isPrime(1)).toBe(false);
  expect(isPrime(2)).toBe(true);
  expect(isPrime(9)).toBe(false);
  expect(isPrime(-15)).toBe(false);
  expect(isPrime(0.1)).toBe(false);
});

it('Only prime numbers', () => {
  expect(sumPrimes([2,7,13])).toBe(22)
});

it('Mixed numbers', () => {
  expect(sumPrimes([2,7,9])).toBe(9)
});

it('Only not prime numbers', () => {
  expect(sumPrimes([15,4,9,16])).toBe(0)
});

it('Invalid type of array elements', () => {
  expect( () => sumPrimes(['a', 'b', 9])
  ).toThrow();
});

it('Parameter is not array', () => {
  expect(() => sumPrimes()).toThrowError('error no array');

});

it('array with big prime returns sum equal to that prime', () => {
  const bigPrime = 2**31 - 1
  expect(sumPrimes([bigPrime])).toBe(bigPrime)
});

// check ===
// expect(1).toBe(1)

// check deep equality
// expect([1, 2]).toEqual([1, 2])