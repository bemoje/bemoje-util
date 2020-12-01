import { isCharCodeDigit } from './isCharCodeDigit'
import { isCharCodeDash } from './isCharCodeDash'
import { isCharCodeZero } from './isCharCodeZero'

export function isIntegerStringKey(key) {
	const code = key.charCodeAt(0)
	if (isCharCodeDash(code)) {
		return isCharCodeZero(key.charCodeAt(1))
	}
	return isCharCodeDigit(code)
}
