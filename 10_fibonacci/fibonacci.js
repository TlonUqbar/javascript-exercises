const fibonacci = function(number) {
  let n1 = 0, n2 = 1, nextN;

  if ( typeof number === "string" ) number = Number(number);
  if (number < 0 ) return "OOPS";
  if (number === 1) return 1;

  for (let i = 1; i < number; i++) {
    nextN = n1 + n2;
    n1 = n2;
    n2 = nextN;
  }
  return nextN;
};

// Do not edit below this line
module.exports = fibonacci;
