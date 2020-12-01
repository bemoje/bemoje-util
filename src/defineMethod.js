import { isFunction } from './isFunction'
import { defineProperty } from './defineProperty'
import { Method } from './Method'

/**
 * A convenience method almost identical to @see Object.prototype.defineProperty except that the 'value' attribute can be
 * set as argument, 'f' prior to the descriptor/attributes object.
 *
 * If 'f' is a named function, then the 'key' argument can be omitted entirely. If key is not omitted and 'f' is
 * not a named function, then its name will be set to that of 'key', unless 'key' is a symbol type, then the symbol's
 * inner description will become the function name.
 *
 * @param {string|symbol} key - The property key.
 * @param {function} f - The 'value' attribute of an own property descriptor (expecting a function).
 * @param {object} [attributes={}] - Own boolean attributes of an property descriptor attributes.
 * @param {boolean} [attributes.enumerable] - The 'enumerable' attribute. If true and 'this' is a prototype object, the
 * property is removed from the descriptor in order to disallow setting enumerable properties on prototypes.
 * @param {boolean} [attributes.configurable=true] - The 'configurable' attribute.
 * @param {boolean} [attributes.writable] - The 'writable' attribute. If 'get' or 'set' are defined, this attribue is
 * removed from the descriptor. This would cause an error, so this is just a convenient way to avoid it.
 * @returns {Object} this
 *
 * @example
 * class A {}
 *
 * defineMethod(A.prototype, 'hello', function () {
 *   return 'world'
 * })
 *
 * defineMethod(A.prototype, function hi() {
 *   return 'there'
 * })
 *
 * const a = new A()
 *
 * a.hello()
 * //=> 'world'
 *
 * a.hi()
 * //=> 'there'
 */

export function defineMethod(target, key, f, attributes = {}) {
	if (isFunction(key)) {
		if (f) attributes = f
		f = key
		key = f.name
	} else {
		defineProperty(f, 'name', {
			value:
				typeof key === 'symbol'
					? key.toString().substring(7, key.toString().length - 1)
					: key,
		})
	}
	attributes.value = new Method(f)
	return defineProperty(target, key, attributes)
}
