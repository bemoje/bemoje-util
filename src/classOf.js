import { isConstructor } from './isConstructor'

/**
 * Returns the class constructor function that an object is associated with.
 * @returns {Function}
 *
 * @memberof Object.prototype
 *
 * @example
 * class Hello {}
 * classOf(Hello.prototype)
 * //=> Hello
 * classOf(new Hello())
 * //=> Hello
 *
 * class World extends Hello {}
 * classOf(World.prototype)
 * //=> World
 * classOf(new World())
 * //=> World
 *
 * classOf('string')
 * //=> String
 * classOf(true)
 * //=> Boolean
 * classOf(;(123))
 * //=> Number
 * classOf(NaN)
 * //=> Number
 * classOf(Infinity)
 * //=> Number
 *
 * classOf(Object.prototype)
 * //=> Object
 *
 * classOf(Function.prototype)
 * //=> Function
 *
 * classOf(Array.prototype)
 * //=> Array
 * classOf([])
 * //=> Array
 */

export function classOf(target) {
	return typeof target === 'function'
		? isConstructor(target)
			? target
			: Function
		: target === Object.prototype
		? Object
		: target.constructor
}
