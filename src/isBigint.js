/**
 * Determine wheter the argument is a (typeof) bigint
 * @param {*} value
 * @returns {boolean}
 */
export function isBigint(value) {
	return typeof value === 'bigint'
}

export default isBigint
