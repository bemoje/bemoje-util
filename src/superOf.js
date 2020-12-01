import { isConstructor } from './isConstructor'
import { isPrototype } from './isPrototype'

/**
 * Returns the super class constructor of an object
 * @returns {Function}
 *
 * @example
 * class Wow {}
 * superOf(Wow.prototype)
 * //=> Object
 * superOf(new Wow())
 * //=> Object
 *
 * class Cool extends Wow {}
 * superOf(Cool.prototype)
 * //=> Wow
 * superOf(new Cool())
 * //=> Wow
 *
 * superOf(Object.prototype)
 * //=> null
 *
 * superOf('string')
 * //=> Object
 * superOf(true)
 * //=> Object
 * superOf((123))
 * //=> Object
 *
 * superOf(Function.prototype)
 * //=> Object
 *
 * superOf(Array.prototype)
 * //=> Object
 * superOf([2])
 * //=> Object
 *
 * @example
 * class Wow {}
 * superOf(Wow)
 * //=> Object
 *
 * class Cool extends Wow {}
 * superOf(Cool)
 * //=> Wow
 *
 * superOf(Object)
 * //=> null
 *
 * superOf(Function)
 * //=> Object
 * superOf((function () {}))
 * //=> Object
 * superOf((function* () {}))
 * //=> Object
 * superOf((() => {}))
 * //=> Object
 *
 * superOf(Array)
 * //=> Object
 */

export function superOf(target) {
	return typeof target === 'function'
		? target === Object
			? null
			: isConstructor(target)
			? Reflect.getPrototypeOf(target.prototype).constructor
			: Object
		: target === Object.prototype
		? null
		: isPrototype(target)
		? Reflect.getPrototypeOf(target).constructor
		: Reflect.getPrototypeOf(target.constructor.prototype).constructor
}
