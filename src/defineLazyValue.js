import { isPrimitive } from './isPrimitive'
import { defineProperty } from './defineProperty'

/**
 * Define a placeholder-accessor-property on the object such that the provided 'factory' function is not invoked until
 * the property is accessed. When it is, the factory function is expected to return the 'real' property value. The
 * property is reconfigured to hold a value instead of the placeholding accessor setup. The factory's return value is
 * then set as value and also returned.
 *
 * If the property attribute 'writable' is true, a 'setter' is created. The setter will not invoke the factory function.
 * This makes no sense if we are just about to replace it anyway with the value that the setter just received.
 *
 * Incidentally, if 'defineLazyValue' is called with a prototype object as the execution context, when its time to
 * replace the surrogate accessor property, then instead of setting the new value via the factory function, it will
 * instead be set on the object that at the time is the execution context ('this'). This is most likely the use case.
 * One might be interested in setting a property on all instances of a class, but not until it is needed. So we can
 * define it lazily with 'defineLazyValue'.
 *
 * @param {string|symbol} key - The property key.
 * @param {function} factory - A factory function that when invoked, returns the property value.
 * @param {object} [attributes={}] - Own boolean attributes of an property descriptor attributes.
 * @param {boolean} [attributes.enumerable] - The 'enumerable' attribute. If true and 'this' is a prototype object, the
 * property is removed from the descriptor in order to disallow setting enumerable properties on prototypes.
 * @param {boolean} [attributes.configurable=true] - The 'configurable' attribute.
 * @param {boolean} [attributes.writable] - The 'writable' attribute. If 'get' or 'set' are defined, this attribue is
 * removed from the descriptor. This would cause an error, so this is just a convenient way to avoid it.
 * @returns {Function} this
 *
 * @example
 * class Ins {
 *   doneWork = false
 * }
 *
 * // 'factory' example
 * function heavyComputation() {
 *   // factory's 'this'-context is the instance
 *   this.doneWork = true
 *
 *   // do "heavy" work
 *   return 40 + 2
 * }
 *
 * // create lazy value property
 * Ins.prototype.defineLazyValue('lazyValue', heavyComputation, {
 *   // writable -> create setter
 *   writable: true,
 *   enumerable: true,
 * })
 *
 * // instances
 * const a = new Ins()
 * const b = new Ins()
 *
 * // console log
 * const logValue = (result) => console.log('\nvalue: ' + result)
 * const status = () => console.log('\n', a, '\n', b, '\n')
 *
 * // demo
 * status()
 *
 * logValue(a.lazyValue)
 * status()
 *
 * a.lazyValue = 'overwrite after'
 * logValue(a.lazyValue)
 * status()
 *
 * b.lazyValue = 'overwrite before'
 * logValue(b.lazyValue)
 * status()
 *
 * //=> [CONSOLE OUTPUT]:
 * // ------------------
 * //
 * //  Ins { doneWork: false }
 * //  Ins { doneWork: false }
 * //
 * //
 * // value: 42
 * //
 * //  Ins { doneWork: true, lazyValue: 42 }
 * //  Ins { doneWork: false }
 * //
 * //
 * // value: overwrite after
 * //
 * //  Ins { doneWork: true, lazyValue: 'overwrite after' }
 * //  Ins { doneWork: false }
 * //
 * //
 * // value: overwrite before
 * //
 * //  Ins { doneWork: true, lazyValue: 'overwrite after' }
 * //  Ins { doneWork: false, lazyValue: 'overwrite before' }
 * //
 */

export function defineLazyValue(target, key, factory, attributes = {}) {
	const descriptor = {
		enumerable: attributes.enumerable,
	}
	descriptor.get = function () {
		attributes.value = factory.call(this)
		defineProperty(this, key, attributes)
		return this[key]
	}
	if (
		attributes.writable ||
		(attributes.writable !== false && isPrimitive(attributes.value))
	) {
		descriptor.set = function (value) {
			attributes.value = value
			defineProperty(this, key, attributes)
		}
	}
	return defineProperty(target, key, descriptor)
}
