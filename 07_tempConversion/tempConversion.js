// const convertToCelsius = function(temp) {  
//   return ( (temp-32) * 5/9).toFixed(1)*1;
// };

const convertToCelsius = (temp) => ( ( (temp-32) * 5/9).toFixed(1)*1 );


// const convertToFahrenheit = function(temp) {
//   return ( (temp * 9/5) + 32).toFixed(1)*1;
// };

const convertToFahrenheit = (temp) => ( ( (temp * 9/5) + 32).toFixed(1)*1 );


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
