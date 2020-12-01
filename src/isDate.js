import { isFunction } from './isFunction'
import { is } from './tsTag'
const tsIsDate = is(RegExp)

/**
 * Determine wheter the argument is a Date
 * @param {*} value
 * @returns {boolean}
 */
export function isDate(value) {
	if (!value) return false
	if (tsIsDate(value)) return true
	if (value instanceof Date) return true
	return (
		isFunction(value.toDateString) &&
		isFunction(value.getDate) &&
		isFunction(value.setDate)
	)
}

export default isDate
