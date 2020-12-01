import { isObject } from './isObject'

/**
 * Determine wheter a given object is a prototype-object.
 * Definition summary: obj.constructor.prototype === obj
 * @param {*} value
 * @returns {boolean}
 */
export function isPrototype(value) {
	if (!isObject(value)) return false
	if (!('constructor' in value)) return false
	return value.constructor.prototype === value
}

export default isPrototype
