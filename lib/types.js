const isNumber = val => typeof val === 'number';
const isString = val => typeof val === 'string';
const isBoolean = val => typeof val === 'boolean';
const isFunction = val => typeof val === 'function';
const isObject = val => typeof val === 'object' && val !== null && isArray(val) !== true;
const isArray = val => Array.isArray(val);

const castToNumber = val => {
  if(isNumber(val)) return val;
  const number = Number(val);
  if(isNaN(number)) throw new CastError(Number, val);
  return number;
};
const castToString = val => {
  if(isString(val)) {
    return val;
  } else if(typeof val === 'object') {
    throw new CastError(String, val);
  }
  const string = String(val);
  return string;
};
const castToArray = (...val) => val;
const castToBoolean = val => {
  if(isBoolean(val)) {
    return val;
  } else if(typeof val === 'object') {
    throw new CastError(String, val);
  }
  const boolean = !!val;
  return boolean;
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
  CastError,
  getCaster,
  castToNumber,
  castToString,
  castToBoolean,
  isNumber,
  isString,
  isBoolean,
  isArray,
  isObject,
  isFunction,
  castToArray
};

