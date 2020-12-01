import { DefaultWeakMap } from 'mnemonist'
import { classOf } from './classOf'
import { defineProperty } from './defineProperty'

/**
 * The provided 'factory' function works as a property value initializer. Actually, a getter accessor property is
 * created. The getter however, will use the factory to create a 'fresh' value if the executing 'this' context has
 * changed.
 *
 * For example, imagine we want a static class property that is an array containing instances of the class. If the class
 * is extended, the extension class will then be putting its instances into its super-class's array. If this is not
 * desired, this is where 'defineLoyalValue' is handy. If the execution context has changed, and in this case it has,
 * because the new context is the sub-class. Then a new array could be created instead of pointing to the original if
 * the factory returned a fresh array. See the example.
 *
 * @method defineLoyalValue
 * @memberof Object.prototype
 *
 * @param {string|symbol} key - The property key.
 * @param {function} factory - A factory function that when invoked, returns the property value.
 * @param {object} [attributes={}] - Own boolean attributes of an property descriptor attributes.
 * @param {boolean} [attributes.enumerable] - The 'enumerable' attribute.
 * @param {boolean} [attributes.configurable] - The 'configurable' attribute.
 * @param {boolean} [attributes.writable] - The 'writable' attribute.
 * @returns {Function} this
 *
 * @example
 * class A {
 *   constructor() {
 *     this.index = ++this.nextIndex
 *     this.instances.push(this)
 *   }
 * }
 *
 * defineLoyalValue(A.prototype, 'instances', () => [])
 * defineLoyalValue(A.prototype, 'nextIndex', () => 0, { writable: true })
 *
 * class B extends A {
 *   constructor() {
 *     super()
 *   }
 * }
 *
 * new A()
 * new A()
 * new B()
 * new B()
 * new A()
 *
 * A.prototype.instances
 * //=> [ A { index: 1 }, A { index: 2 }, A { index: 3 }
 *
 * B.prototype.instances
 * //=> [ B { index: 1 }, B { index: 2 } ]
 */

export function defineLoyalValue (target,key,factory,attributes = {}) {
	const C = classOf(target)
	const P = C.prototype
	const map = new DefaultWeakMap((...args) => {
		return factory.call(C,...args)
	})
	// getter
	attributes.get = function () {
		return map.get(classOf(this))
	}
	// setter
	if (attributes.writable) {
		attributes.set = function (value) {
			return map.set(classOf(this),value)
		}
	}
	// set value on class
	if (C !== Object) {
		defineProperty(C,key,attributes)
	}
	// set value on proto
	defineProperty(P,key,attributes)
}
