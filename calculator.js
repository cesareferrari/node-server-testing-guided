function add(numbers) {
  return numbers.reduce((total, number) => total + number);
}

function subtract(a, b) {return a - b};
function multiply(a, b) { return a * b};
function divide(a, b) { return a / b};


module.exports = {
  add,
  subtract,
  multiply,
  divide
}
