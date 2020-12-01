/**
 * Determine if a value is applicable as a length for array-like collections.
 * @param {*} v - the value
 * @returns {boolean}
 */
export function isValidLength(v) {
	return v === 0 || (typeof v === 'number' && v > 0 && v - v === 0)
}

export default isValidLength
