/**
 * Determine wheter a given value is a (typeof) bigint
 * @param {*} value
 * @returns {boolean}
 */
export function isBigint(value) {
	return typeof value === 'bigint'
}

export default isBigint
