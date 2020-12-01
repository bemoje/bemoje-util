/**
 * Determine whether a value could be a property key, ie. it being either a string or symbol
 * @param {*} value
 * @returns {boolean}
 */
export function isKey(value) {
	const t = typeof value
	return t === 'string' || t === 'symbol'
}

export default isKey
