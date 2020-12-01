/**
 * Determine wheter a given value is an array
 * @param {*} value
 * @returns {boolean}
 *
 * fork of https://github.com/hemanth/is-iterable
 */
export function isIterable(v) {
	return v != null && typeof v[Symbol.iterator] === 'function'
}

export default isIterable
