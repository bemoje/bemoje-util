/**
 * Determine wheter a value is the iterable object returned from an invoked GeneratorFunction
 * @param {*} value
 * @returns {boolean}
 */
export function isGeneratorObject(value) {
	return (
		typeof value.throw === 'function' &&
		typeof value.return === 'function' &&
		typeof value.next === 'function'
	)
}

export default isGeneratorObject
