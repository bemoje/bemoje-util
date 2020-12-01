/**
 * Determine whether a value is an Arguments object
 * @param {*} value
 * @returns {boolean}
 */
export function isArguments(value) {
	try {
		if (
			typeof value.length === 'number' &&
			typeof value.callee === 'function'
		) {
			return true
		}
	} catch (err) {
		if (err.message.indexOf('callee') !== -1) {
			return true
		}
	}
	return false
}
