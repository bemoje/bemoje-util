/**
 * The global object in the current running environment.
 * This object is set on the global object, so that it can always be referencéd as 'GLOBAL'.
 *
 * @constant {object} GLOBAL
 */
export const GLOBAL =
	typeof global === 'object' && global.Object === Object
		? global
		: typeof window === 'object' && window.Object === Object
		? window
		: typeof self === 'object' && self.Object === Object
		? self
		: new Function('return this')()
