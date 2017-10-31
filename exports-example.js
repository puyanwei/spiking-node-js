let counter = function(arr) {
  return "There are " + arr.length + " elements in this array";
};

let adder = function(a, b) {
  return `The sum if the two numbers is ${a + b}`;
};

let pi = 3.142;
//
// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

module.exports = {
  counter,
  adder,
  pi
};

// module.exports.counter = function(arr) {
//   return "There are " + arr.length + " elements in this array";
// };
//
// module.exports.adder = function(a, b) {
//   return `The sum if the two numbers is ${a + b}`;
// };
//
// module.exports.pi = 3.142;
