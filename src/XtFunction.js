import stringHash from 'string-hash'
import { ExtensibleFunction } from './ExtensibleFunction'
import { defineMethod } from './defineMethod'
import { defineValue } from './defineValue'
import { defineLoyalValue } from './defineLoyalValue'
import { transferProperty } from './transferProperty'
import { superChainFromRoot } from './superChainFromRoot'
import { globalSymbolicKeyspace } from './globalSymbolicKeyspace'

globalSymbolicKeyspace()

SYMKEY.key('INITIALIZERS')

export class XtFunction extends ExtensibleFunction {
	constructor(name, f, config = {}) {
		super(f)

		this[SYMKEY.INITIALIZERS].add(function () {
			// dynamically created is[className] function
			defineMethod(
				this.prototype,
				'is' + this.name,
				function (instance, strict = false) {
					return strict
						? instance.constructor === this
						: instance instanceof this
				}
			)
		})

		// run initializers
		for (const f of this.initializers()) {
			f.call(this, config)
		}
	}

	*initializers() {
		const seen = new Set()
		for (const Super of superChainFromRoot(this)) {
			if (!seen.has(Super)) {
				seen.add(Super)
				const initSuper = Super[SYMKEY.INITIALIZERS]
				if (initSuper) {
					for (const f of initSuper) {
						if (!seen.has(f)) {
							seen.add(f)
							yield f
						}
					}
				}
			}
		}
	}

	use(f) {
		const inits = this[SYMKEY.INITIALIZERS]
		const sizeBefore = inits.size
		inits.add(f)
		// if not already called
		if (inits.size !== sizeBefore) {
			f.call(this)
		}
		return this
	}
	// isFunction
	get i() {
		let i = this.meta.get(INDEX_SYMBOL)
		if (i === undefined) {
			i = new Uint32Array(stringHash(this.name))
			this.meta.set([META_SYMBOL], i)
		}
		return i
	}
	staticMixin(Source, filter) {
		for (const key of Reflect.ownKeys(Source)) {
			if (key !== 'constructor' && key !== 'prototype' && key !== 'length') {
				if (!filter || filter(key)) {
					transferProperty(this, key, Source)
				}
			}
		}
	}
	prototypeMixin(Source, filter) {
		for (const key of Reflect.ownKeys(Source)) {
			if (key !== 'constructor') {
				if (!filter || filter(key)) {
					transferProperty(this.prototype, key, Source)
				}
			}
		}
	}
	mixin(Source) {
		this.staticMixin(Source, (key) => !(key in this))
		this.prototypeMixin(Source, (key) => !(key in this.prototype))
	}
}

defineLoyalValue(XtFunction.prototype, SYMKEY.INITIALIZERS, () => new Set())
