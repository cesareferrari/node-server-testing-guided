const calculator = require('../calculator.js');

describe('calculator add functions', () => {
  it('should add 2 numbers', () => {
    expect(calculator.add([2,2])).toBe(4);
  });

  it('should add 3 parameters', () => {
    expect(calculator.add([2, 3, 4])).toBe(9);
  });
})


it('should subtract 2 numbers', () => {
  expect(calculator.subtract(2,2)).toBe(0);
});

it('should multiply 2 numbers', () => {
  expect(calculator.multiply(2,2)).toBe(4);
});

it('should divide 2 numbers', () => {
  expect(calculator.divide(2,2)).toBe(1);
});

