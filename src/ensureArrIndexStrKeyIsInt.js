import { isIntegerStringKey } from './isIntegerStringKey'

/**
 * Ensures that numeric integer string representations are turned into integers.
 * This function assumes that the key is either an array index number (integer), a string or a symbol.
 */

export function ensureArrIndexStrKeyIsInt (key) {
	return isIntegerStringKey(key) ? parseInt(key) : key
}
