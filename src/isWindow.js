/**
 * Determine wheter a given value is a browser's global object, 'window'
 * @param {*} value
 * @returns {boolean}
 */
export function isWindow(v) {
	if (v == null) {
		return false
	}
	return v === Object(v) && v === v.window
}

export default isWindow
