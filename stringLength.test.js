// stringLength.test.js

const stringLength = require('./stringLength');

describe('stringLength', () => {
  test('should return the length of a string', () => {
    const result = stringLength('Hello, World!');
    expect(result).toBe(13);
  });

  test('should throw an error for strings shorter than 1 character', () => {
    expect(() => stringLength('')).toThrow('String length must be between 1 and 10 characters.');
  });

  test('should throw an error for strings longer than 10 characters', () => {
    expect(() => stringLength('ThisIsTooLong')).toThrow('String length must be between 1 and 10 characters.');
  });
});
