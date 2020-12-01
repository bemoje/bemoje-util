import { is } from './tsTag'
const tsIsRegExp = is(RegExp)

/**
 * Determine wheter a given value is a RegExp
 * @param {*} value
 * @returns {boolean}
 */
export function isRegExp(value) {
	if (!value) return false
	if (tsIsRegExp(value)) return true
	if (value instanceof RegExp) return true
	return (
		typeof value.flags === 'string' &&
		typeof value.ignoreCase === 'boolean' &&
		typeof value.multiline === 'boolean' &&
		typeof value.global === 'boolean'
	)
}
