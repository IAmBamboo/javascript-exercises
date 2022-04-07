const ftoc = function(temp) {
  let celcius = (temp-32)*(5/9)
  let tempRounded = Math.round(celcius * 10) / 10
  return tempRounded;
};

const ctof = function(temp) {
  let fahrenheit = (temp*(9/5))+32
  let tempRounded = Math.round(fahrenheit * 10) / 10
  return tempRounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
