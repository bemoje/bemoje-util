import { isPrototype } from './isPrototype'
import { defineValue } from './defineValue'

/**
 * Create property key aliases.
 *
 * If the object is a prototype object and no property exists on it by the name of 'key', it is assumed that it is meant
 * to be found on its associated instances, in which case an accessor 'getter' property that returns the value at 'key'
 * is created instead of a direct reference value. When aliasing instance properties, it makes sense to perform aliasing
 * on the prototype like this, since it is 'cheaper' in terms of performance because then it's not necessary to create
 * the alias-property on each instance, but just this once on the prototype.
 *
 * @param {string|symbol} key - The property key.
 * @param {...(string|symbol)} [aliases=[]] - Aliases for 'key'.
 * @returns {Function} this
 *
 * @example
 * class A {
 *   static analyze() {}
 *
 *   constructor() {
 *     this.i = 0
 *   }
 * }
 *
 *
 * defineAlias(A, 'analyze', 'analyse')
 *
 * A.analyze === A.analyse
 * //=> true
 *
 *
 * defineAlias(A.prototype, 'i', 'index')
 * const a = new A()
 *
 * a.i === a.index
 * //=> true
 */

export function defineAlias(target, key, ...aliases) {
	if (key in target) {
		for (let i = 0, l = aliases.length; i < l; i++) {
			defineValue(target, aliases[i], target[key])
		}
	} else if (isPrototype(target)) {
		for (let i = 0, l = aliases.length; i < l; i++) {
			defineValue(target, aliases[i], {
				get() {
					return this[key]
				},
				set(value) {
					this[key] = value
				},
			})
		}
	} else {
		throw new Error(key + ' does not exist on the object.')
	}
	return target
}
