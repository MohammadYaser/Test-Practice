// reverseString.test.js

const reverseString = require('./reverseString');

describe('reverseString', () => {
  test('should reverse a string', () => {
    const result = reverseString('Hello, World!');
    expect(result).toBe('!dlroW ,olleH');
  });
});
