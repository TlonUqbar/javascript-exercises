const findTheOldest = function(obj) {
  
  const result = obj.reduce( (accumulator, item) => { 
    const initialAge = ((accumulator.yearOfDeath) ? new Date(accumulator.yearOfDeath.toString()).getFullYear() : new Date().getFullYear() ) - new Date(accumulator.yearOfBirth.toString()).getFullYear(); 
    const curItemAge = ((item.yearOfDeath) ? new Date(item.yearOfDeath.toString()).getFullYear() : new Date().getFullYear() ) - new Date(item.yearOfBirth.toString()).getFullYear(); 
    
    return ( curItemAge > initialAge ) ? item : accumulator;
   });

   return result;
};

// Do not edit below this line
module.exports = findTheOldest;
