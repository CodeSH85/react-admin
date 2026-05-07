
export function isObject<T>(target: T): boolean {
  return typeof target === 'object' && !Array.isArray(target) && target !== null;
}

export function flatten() {

}

export function hasProp<T>(target: T, key: string | number | symbol): boolean {
  if (!isObject(target)) throw new Error('Value is not an object');
  return Object.hasOwnProperty.call(target, key);
}

export function buildObject({  }) {
  return 
}