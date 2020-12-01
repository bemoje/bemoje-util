import { isFunction } from './isFunction'
import { defineProperty } from './defineProperty'

/**
 * A convenience method almost identical to @see Object.prototype.defineProperty except that the 'get' attribute can be
 * set as arguments prior to the descriptor/attributes object.
 *
 * @memberof Object.prototype
 *
 * @param {string|symbol} key - The property key.
 * @param {function|any} [get] - The 'get' attribute of an own property descriptor. If 'get' is not a function, a
 * function that returns the value is created and used in its place.
 * @param {object} [attributes={}] - Own boolean attributes of an property descriptor attributes.
 * @param {boolean} [attributes.enumerable] - The 'enumerable' attribute. If true and 'this' is a prototype object, the
 * property is removed from the descriptor in order to disallow setting enumerable properties on prototypes.
 * @param {boolean} [attributes.configurable=true] - The 'configurable' attribute.
 * @param {boolean} [attributes.writable] - The 'writable' attribute. If 'get' or 'set' are defined, this attribue is
 * removed from the descriptor. This would cause an error, so this is just a convenient way to avoid it.
 * @returns {Function} this
 *
 * @example
 * class A {
 *   constructor() {
 *     this._key = 0
 *   }
 * }
 *
 * const a = new A()
 *
 * defineGetter(A.prototype, 'key', function () {
 *   return this._key
 * })
 *
 * defineSetter(A.prototype, 'key', function (value) {
 *   this._key = value
 * })
 *
 * a.key
 * //=> 0
 *
 * a.key = 23
 *
 * a.key
 * //=> 23
 */

export function defineGetter(target, key, get, attributes = {}) {
	if (isFunction(key)) {
		if (get) attributes = get
		get = key
		key = get.name
	}
	attributes.get = isFunction(get) ? get : () => get
	return defineProperty(target, key, attributes)
}
