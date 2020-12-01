import { isConstructor } from './isConstructor'
import { nativeClasses } from './nativeClasses'

const regexClassInSource = /class \w+/
const regexNewError = /^Class constructor \w+ cannot be invoked without 'new'$/

/**
 * Determine whether a value is a class constructor function
 * @param {*} value
 * @returns {boolean}
 */
export function isClass(value) {
	if (!isConstructor(value)) return false
	if (nativeClasses.names.has(value.name)) return true
	const src = value.toString()
	if (regexClassInSource.test(src.substring(0, src.indexOf('{') + 1))) {
		return true
	}
	try {
		value()
		return false
	} catch (err) {
		if (regexNewError.test(err.message)) {
			return true
		}
	}
}
