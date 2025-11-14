import { describe, expect, it } from 'vitest';
import { calculateSum, checkIfPrime, findMaximumNumber, removeDuplicateElements } from './my-functions';

describe('calculateSum', () => {
  it('should return 3 when adding 1 and 2', () => {
    expect(calculateSum(1, 2)).toBe(3);
  });

  it('should return -2 when adding -1 and -1', () => {
    expect(calculateSum(-1, -1)).toBe(-2);
  });

  it('should return 0 when adding 0 and 0', () => {
    expect(calculateSum(0, 0)).toBe(0);
  });
});

describe('checkIfPrime', () => {
  it('should return true when checking if 2 is prime', () => {
    expect(checkIfPrime(2)).toBe(true);
  });

  it('should return false when checking if 4 is prime', () => {
    expect(checkIfPrime(4)).toBe(false);
  });

  it('should return true when checking if 17 is prime', () => {
    expect(checkIfPrime(17)).toBe(true);
  });

  it('should return false when checking if 1 is prime', () => {
    expect(checkIfPrime(1)).toBe(false);
  });
});

describe('findMaximumNumber', () => {
  it('should return 5 when finding max in [1, 2, 3, 4, 5]', () => {
    expect(findMaximumNumber([1, 2, 3, 4, 5])).toBe(5);
  });

  it('should return 10 when finding max in [-10, -5, 0, 5, 10]', () => {
    expect(findMaximumNumber([-10, -5, 0, 5, 10])).toBe(10);
  });

  it('should return 200 when finding max in [100, 50, 200, 150]', () => {
    expect(findMaximumNumber([100, 50, 200, 150])).toBe(200);
  });
});

describe('removeDuplicateElements', () => {
  it('should return [1, 2, 3, 4, 5] when removing duplicates from [1, 2, 2, 3, 4, 4, 5]', () => {
    expect(removeDuplicateElements([1, 2, 2, 3, 4, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
  });

  it('should return [1] when removing duplicates from [1, 1, 1, 1]', () => {
    expect(removeDuplicateElements([1, 1, 1, 1])).toStrictEqual([1]);
  });

  it('should return [5, 4, 3, 2, 1] when removing duplicates from [5, 4, 3, 2, 1, 1, 2, 3, 4, 5]', () => {
    expect(removeDuplicateElements([5, 4, 3, 2, 1, 1, 2, 3, 4, 5])).toStrictEqual([5, 4, 3, 2, 1]);
  });
});