const {
  isNumber,
  isString,
  castToNumber,
  isBoolean,
  isArray,
  isObject,
  isFunction,
  getCaster
} = require('../lib/types.js');

describe('validator module', () => {
  describe('basic validation', () => {
    it('properly tells if a value is a numbers', () => {
      expect(isNumber(3)).toBeTruthy();
      expect(isNumber('hi')).toBeFalsy();
      expect(isNumber([])).toBeFalsy();
      expect(isNumber({})).toBeFalsy();
      expect(isNumber(() => {})).toBeFalsy();
      expect(isNumber(true)).toBeFalsy();
    });
  });
  describe('basic validation', () => {
    it('properly tells if a value is a string', () => {
      expect(isString(3)).toBeFalsy();
      expect(isString('hi')).toBeTruthy();
      expect(isString('534')).toBeTruthy();
      expect(isString([])).toBeFalsy();
      expect(isString({})).toBeFalsy();
      expect(isString(() => { })).toBeFalsy();
      expect(isString(true)).toBeFalsy();
    });
  });
  describe('basic validation', () => {
    it('properly tells if a value is a boolean', () => {
      expect(isBoolean(3)).toBeFalsy();
      expect(isBoolean('hi')).toBeFalsy();
      expect(isBoolean('534')).toBeFalsy();
      expect(isBoolean([])).toBeFalsy();
      expect(isBoolean({})).toBeFalsy();
      expect(isBoolean(() => { })).toBeFalsy();
      expect(isBoolean(true)).toBeTruthy();
      expect(isBoolean(false)).toBeTruthy();
    });
  });
  describe('basic validation', () => {
    it('properly tells if a value is an array', () => {
      expect(isArray(3)).toBeFalsy();
      expect(isArray('hi')).toBeFalsy();
      expect(isArray('534')).toBeFalsy();
      expect(isArray([])).toBeTruthy();
      expect(isArray({})).toBeFalsy();
      expect(isArray(() => { })).toBeFalsy();
      expect(isArray(true)).toBeFalsy();
      expect(isArray(false)).toBeFalsy();
    });
  });
  describe('basic validation', () => {
    it('properly tells if a value is an object', () => {
      expect(isObject(3)).toBeFalsy();
      expect(isObject('hi')).toBeFalsy();
      expect(isObject('534')).toBeFalsy();
      expect(isObject([])).toBeFalsy();
      expect(isObject({})).toBeTruthy();
      expect(isObject(() => { })).toBeFalsy();
      expect(isObject(true)).toBeFalsy();
      expect(isObject(false)).toBeFalsy();
    });
  });
  describe('basic validation', () => {
    it('properly tells if a value is a function', () => {
      expect(isFunction(3)).toBeFalsy();
      expect(isFunction('hi')).toBeFalsy();
      expect(isFunction('534')).toBeFalsy();
      expect(isFunction([])).toBeFalsy();
      expect(isFunction({})).toBeFalsy();
      expect(isFunction(() => { })).toBeTruthy();
      expect(isFunction(true)).toBeFalsy();
      expect(isFunction(false)).toBeFalsy();
    });
  });

  describe('casters', () => {
    it('can cast values to a number', () => {
      expect(castToNumber(3)).toEqual(3);
      expect(castToNumber('3')).toEqual(3);
      expect(castToNumber(true)).toEqual(1);
      expect(castToNumber(false)).toEqual(0);
    });

    it('throws if value is not castable to number', () => {
      expect(() => castToNumber('hi')).toThrowErrorMatchingSnapshot();
      expect(() => castToNumber({})).toThrowErrorMatchingSnapshot();
    });
  });

  it('can get the right caster', () => {
    expect(getCaster(Number)).toEqual(castToNumber);
    expect(getCaster(Promise)).toBeNull();
  });
});
