import { defineProperty } from './defineProperty'

/**
 * A convenience method almost identical to @see Object.prototype.defineProperty except that the 'value' attribute can be
 * set as arguments prior to the descriptor/attributes object.
 *
 * @method defineValue
 * @memberof Object.prototype
 *
 * @param {string|symbol} key - The property key.
 * @param {*} [value] - The 'value' attribute of an own property descriptor.
 * @param {object} [attributes={}] - Own boolean attributes of an property descriptor attributes.
 * @param {boolean} [attributes.enumerable] - The 'enumerable' attribute. If true and 'this' is a prototype object, the
 * property is removed from the descriptor in order to disallow setting enumerable properties on prototypes.
 * @param {boolean} [attributes.configurable=true] - The 'configurable' attribute.
 * @param {boolean} [attributes.writable] - The 'writable' attribute. If 'get' or 'set' are defined, this attribue is
 * removed from the descriptor. This would cause an error, so this is just a convenient way to avoid it.
 * @returns {Function} this
 *
 * @example
 * const o = {}
 * console.log(defineValue(o, 'a', 23, { enumerable: true }))
 * //=> { a: 23 }
 */

export function defineValue (target,key,value,attributes = {}) {
	attributes.value = value
	return defineProperty(target,key,attributes)
}
