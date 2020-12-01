import { isDefined } from './isDefined'
import { isFunction } from './isFunction'
import { isSymbol } from './isSymbol'
import { paramNames } from './paramNames'
import { superChain } from './superChain'

class APIElement {
	constructor(parent, klass, isStatic, key, isMethod, isGetter, isSetter) {
		Object.defineProperty(this, 'parent', { value: parent })
		this.class = klass
		this.key = key
		this.isStatic = isStatic
		this.isPrototype = !isStatic
		this.isMethod = isMethod
		this.isProperty = !isMethod
		this.isGetter = isGetter
		this.isSetter = isSetter
		this.isSymbolKeyed = isSymbol(key)
		this.paramNames = isMethod
			? paramNames(
					this.isStatic ? klass[this.key] : klass.prototype[this.key]
			  )
			: []
	}

	toString() {
		let getset
		if (this.isProperty) {
			getset = []
			if (this.isGetter) getset.push('get')
			if (this.isSetter) getset.push('set')
			getset = getset.join('/')
			if (!getset) getset = 'value'
		}
		return (
			this.parent.name +
			(this.isStatic ? '' : '.prototype') +
			(this.isSymbolKeyed
				? '[' +
				  (/^Symbol\./i.test(this.key.description)
						? this.key.description
						: this.key.toString()) +
				  ']'
				: '.' + this.key) +
			(this.isMethod
				? '(' + this.paramNames.join(', ') + ')'
				: ' [' + getset + ']')
		)
	}
}

/**
 * Traverse the prototype chain of a provided class function object, extracting an API overview of methods, getters,
 * setters of static and prototype properties.
 * @param {Function} klass - the class function object to parse
 * @param {boolean} [toString=false] - Instead of returning an Array of APIElement instances, return string
 * representations/descriptions.
 * @returns {Array<APIElement|string>}
 */
export function api(klass, toString = false) {
	const bools = (target, name) => {
		const descriptor = Object.getOwnPropertyDescriptor(target, name)
		if (isDefined(descriptor.value)) {
			return [isFunction(descriptor.value), false, false]
		} else {
			return [false, isDefined(descriptor.get), isDefined(descriptor.set)]
		}
	}

	const accum = []

	for (const Super of superChain(klass)) {
		if (
			Super !== Function &&
			Super !== Function.prototype &&
			Super !== Object &&
			Super !== Object.prototype
		) {
			for (const name of Reflect.ownKeys(Super)) {
				if (!['length', 'prototype', 'name'].includes(name)) {
					const o = new APIElement(
						klass,
						Super,
						true,
						name,
						...bools(Super, name)
					)
					accum.push(toString ? o.toString() : o)
				}
			}
			for (const name of Reflect.ownKeys(Super.prototype)) {
				if (name !== 'constructor') {
					const o = new APIElement(
						klass,
						Super,
						false,
						name,
						...bools(Super.prototype, name)
					)
					accum.push(toString ? o.toString() : o)
				}
			}
		}
	}
	return toString ? accum.join('\n') : accum
}
