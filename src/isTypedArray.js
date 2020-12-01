/**
 * Determine if a value is a TypedArray
 * @param {*} value
 * @returns {boolean}
 */
export function isTypedArray(value) {
	return (
		value instanceof Uint8Array ||
		value instanceof Uint16Array ||
		value instanceof Uint32Array ||
		value instanceof Uint8ClampedArray ||
		value instanceof Float32Array ||
		value instanceof Float64Array ||
		value instanceof Int8Array ||
		value instanceof Int16Array ||
		value instanceof Int32Array
	)
}

export default isTypedArray
