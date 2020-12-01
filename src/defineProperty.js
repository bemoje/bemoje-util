import { isDefined } from './isDefined'
import { isUndefined } from './isUndefined'
import { isString } from './isString'
import { isPrototype } from './isPrototype'

/**
 * Based on Reflect.defineProperty. The differences are:
 * - configurable is true by default
 * - writable removed from descriptor if has accessors
 * - returns 'target' object unless thats a prototype object, then return target.constructor
 * - disallows defining enumerable properties on prototype objects
 *
 * @param {Object} target - The target object
 * @param {string|symbol} key - The property key.
 * @param {object} [descriptor={}] - The own property descriptor.
 * @param {boolean} [descriptor.enumerable] - The 'enumerable' attribute. If true and 'this' is a prototype object, the
 * property is removed from the descriptor in order to disallow setting enumerable properties on prototypes.
 * @param {boolean} [descriptor.configurable=true] - The 'configurable' attribute.
 * @param {boolean} [descriptor.writable] - The 'writable' attribute. If 'get' or 'set' are defined, this attribue is
 * removed from the descriptor. This would cause an error, so this is just a convenient way to avoid it.
 * @param {*} [descriptor.value] - The 'value' attribute.
 * @param {function} [descriptor.get] - The 'get' attribute.
 * @param {function} [descriptor.set] - The 'set' attribute.
 * @returns {Object} this
 */

export function defineProperty(target, key, descriptor = {}) {
	// configurable true is default but overridden if attribute is defined
	if (isUndefined(descriptor.configurable)) {
		descriptor.configurable = true
	}

	if (
		// disallow allow enumerable properties on any prototype object.
		(descriptor.enumerable === true && isPrototype(target)) ||
		// force-respect underscore prefix naming convention where this indicates it should not be id because only
		// useful internally, so the property should be non-enumerable (tip: it's only for convenience and not
		// security, the property is easily accessible still).
		(isString(key) && key.charAt(0) === '_')
	) {
		descriptor.enumerable = false
	}

	// override 'writable' attribute to undefined if 'get' or 'set' attributes are defined (would throw)
	if (isDefined(descriptor.writable) && (descriptor.get || descriptor.set)) {
		Reflect.deleteProperty(descriptor, 'writable')
	}
	// Object.defineProperty
	Object.defineProperty(target, key, descriptor)

	return target
}
