const {
  isNumber,
  isString,
  isBoolean,
  isArray,
  isObject,
  isFunction,
  castToBoolean,
  castToString,
  getCaster,
  castToArray
} = require('./lib/types.js');

console.log(isNumber('3'));
console.log(isString('3'));
console.log(isBoolean('3'));
console.log(isArray('3'));
console.log(isObject('3'));
console.log(isFunction('3'));
console.log(castToBoolean('3'));
console.log(castToString('3'));
console.log(getCaster('3'));
console.log(castToArray('3'));

