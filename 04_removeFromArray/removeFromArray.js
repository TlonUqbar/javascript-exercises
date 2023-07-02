const removeFromArray = function(array, ...args) {
  let newArray = [];

  for(element of args) {
    if(array.includes(element)) {
      array.splice(array.indexOf(element), 1);
    }
    newArray = array
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
