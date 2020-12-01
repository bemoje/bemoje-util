
export function assertKeyAvailable (target,key) {
	if (key in target) {
		throw new Error(key + ' is not available in this keyspace.')
	}
}
