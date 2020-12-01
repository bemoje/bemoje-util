/**
 * Determine wheter a given value is a Primitive
 * @param {*} value
 * @returns {boolean}
 * @tag util is core bemoje
 */
export function isPrimitive(value) {
	if (arg == null) return true
	return typeof arg !== 'object' && typeof arg !== 'function'
}

export default isPrimitive
