/**
 * @returns {void}
 */

export function transferProperty (target,key,source) {
	Object.defineProperty(
		target,
		key,
		Object.getOwnPropertyDescriptor(source,key)
	)
}
