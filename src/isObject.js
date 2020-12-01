/**
 * Determine wheter the argument is a Object
 * Definition summary: is typeof object but not null
 * @param {*} value
 * @returns {boolean}
 */
export function isObject(value) {
	return value !== null && typeof value === 'object'
}

export default isObject
