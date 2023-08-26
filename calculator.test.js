// calculator.test.js

const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  // Group tests for the add method
  describe('add', () => {
    test('should add two positive numbers', () => {
      const result = calculator.add(3, 5);
      expect(result).toBe(8);
    });

    test('should add a positive and a negative number', () => {
      const result = calculator.add(3, -2);
      expect(result).toBe(1);
    });

    test('should add two negative numbers', () => {
      const result = calculator.add(-3, -2);
      expect(result).toBe(-5);
    });
  });

  // Group tests for the subtract method
  describe('subtract', () => {
    test('should subtract two positive numbers', () => {
      const result = calculator.subtract(7, 3);
      expect(result).toBe(4);
    });

    test('should subtract a positive and a negative number', () => {
      const result = calculator.subtract(5, -2);
      expect(result).toBe(7);
    });

    test('should subtract two negative numbers', () => {
      const result = calculator.subtract(-3, -2);
      expect(result).toBe(-1);
    });
  });

  // Group tests for the divide method
  describe('divide', () => {
    test('should divide two positive numbers', () => {
      const result = calculator.divide(10, 2);
      expect(result).toBe(5);
    });

    test('should throw an error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Division by zero is not allowed.');
    });
  });

  // Group tests for the multiply method
  describe('multiply', () => {
    test('should multiply two positive numbers', () => {
      const result = calculator.multiply(4, 3);
      expect(result).toBe(12);
    });

    test('should multiply a positive and a negative number', () => {
      const result = calculator.multiply(5, -2);
      expect(result).toBe(-10);
    });

    test('should multiply two negative numbers', () => {
      const result = calculator.multiply(-3, -2);
      expect(result).toBe(6);
    });
  });
});
