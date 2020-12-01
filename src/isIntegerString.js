import { isCharCodeDigit } from './isCharCodeDigit'
import { isCharCodeDash } from './isCharCodeDash'


export function isIntegerString (str) {
	let i = isCharCodeDash(str.charCodeAt(0)) ? 1 : 0
	const l = str.length
	for (let i = 0; i < l; i++) {
		if (!isCharCodeDigit(str.charCodeAt(i))) {
			return false
		}
	}
	return true
}
