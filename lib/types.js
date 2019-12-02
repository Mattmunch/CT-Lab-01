const isNumber = val => typeof val === 'number';
const isString = val => typeof val === 'string';
const isBoolean = val => typeof val === 'boolean';
const isObject = val => typeof val === 'object' && val !== null && isArray(val) !== true;
const isArray = val => Array.isArray(val);

const castToNumber = val => {
  if(isNumber(val)) return val;
  const number = Number(val);
  if(isNaN(number)) throw new CastError(Number, val);
  return number;
};
class CastError extends Error {
  constructor(Type, value) {
    const type = Type.name;
    super(`Cannot cast >>${value}<< to ${type}`);
    this.type = type;
    this.value = value;
  }
}
const casters = {
  Number: castToNumber,
};
const getCaster = Type => {  
  return casters[Type.name] || null;
};

module.exports = {
  isNumber,
  isString,
  CastError,
  getCaster,
  castToNumber,
  isBoolean,
  isArray,
  isObject,
};
// castToString,
// castToBoolean,
// castToArray

// isFunction,
