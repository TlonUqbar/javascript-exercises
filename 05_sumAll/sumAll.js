const sumAll = function(...args) {
  let array = [];
  start = args[0];
  end = args[1];
  
  if (start < 0 || end <  0 ) return "ERROR";
  if (typeof(start) !== "number" || typeof(end) !== "number") return "ERROR";
  if (start > end) {
    start = args[1];
    end = args[0];
  }

  for(let i = start; i <= end; i++) {
    array.push(i);
  }

  return array.reduce( (accumulator, current) => accumulator + current, 0);
  
};

// Do not edit below this line
module.exports = sumAll;
