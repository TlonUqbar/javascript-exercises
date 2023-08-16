const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	return numbers.reduce( (sum, number) =>  sum + number , 0 );
};

const multiply = function(...numbers) {
  return numbers.reduce( (total, number) => total *= number, 1);
};

const power = function(number, power) {
  return Math.pow(number, power);
};

const factorial = function(number) {
  let total = 1;
  if(number < 2 ) return total;

  for(let i=1; i<=number; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
