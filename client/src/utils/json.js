export function whatIsIt(object = {}) {
  const stringConstructor = ''.constructor;
  const arrayConstructor = [].constructor;
  const objectConstructor = {}.constructor;
  const anyFunction = () => {
    console.log('x');
  };
  const functionConstructor = anyFunction.constructor;
  if (object === null) {
    return 'null';
  } else if (object === undefined) {
    return 'undefined';
  } else if (object.constructor === stringConstructor) {
    return 'String';
  } else if (object.constructor === arrayConstructor) {
    return 'Array';
  } else if (object.constructor === objectConstructor) {
    return 'Object';
  } else if (object.constructor === functionConstructor) {
    return 'Function';
  }
  return 'Noop';
}

export function createJson(key = [], value = []) {
  const temp = {};
  if (typeof key === 'string' && typeof value === 'string') {
    temp[key] = value;
  } else {
    if (whatIsIt(key) === 'Array' && whatIsIt(value) === 'Array') {
      if (key.length === value.length) {
        key.map((k, i) => (temp[k] = value[i]));
      }
    }
  }
  return temp;
}
