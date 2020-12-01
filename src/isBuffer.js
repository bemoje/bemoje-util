/**
 * Determine whether a value is a Buffer
 * @param {*} value
 * @returns {boolean}
 */
export function isBuffer(value) {
	if (!value) return false
	if (value.constructor && typeof value.constructor.isBuffer === 'function') {
		return value.constructor.isBuffer(value)
	}
	return false
}

export default isBuffer
