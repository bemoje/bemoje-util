/**
 * Determine wheter a given value is a Error
 * @param {*} value
 * @returns {boolean}
 */
export function isError(value) {
	if (!value) return false
	return (
		value instanceof Error ||
		(typeof value.message === 'string' &&
			value.constructor &&
			typeof value.constructor.stackTraceLimit === 'number')
	)
}

export default isError
