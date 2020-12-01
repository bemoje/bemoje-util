import { isPrototype } from './isPrototype'

/**
 * Determine if value is a constructor function
 * @param {*} value
 * @returns {boolean}
 */
export function isConstructor(value) {
	return (
		typeof value === 'function' &&
		'prototype' in value &&
		isPrototype(value.prototype) &&
		value === value.prototype.constructor
	)
}

export default isConstructor
