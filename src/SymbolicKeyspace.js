import { words } from 'lodash'
import { assertUpperCase } from './assertUpperCase'
import { assertKeyAvailable } from './assertKeyAvailable'
import { defineValue } from './defineValue'
import { GLOBAL } from './GLOBAL'

export class SymbolicKeyspace {
	constructor(parent, description = '') {
		if (parent) {
			this.description = parent.description
				? parent.description + ' --> ' + description
				: description
		}
	}

	key(key, description) {
		key = key.toUpperCase()
		assertUpperCase(key)
		assertKeyAvailable(this, key)
		this[key] = Symbol(
			description || words(key).join(' ').toLowerCase() + ' symbol key'
		)
		return this
	}

	child(key, description) {
		key = key.toUpperCase()
		assertKeyAvailable(this, key)
		const child = new this.constructor(this, description)
		this[key] = child
		return child
	}

	*iterateChildren() {
		for (const key in this) {
			if (this[key] instanceof this.constructor) {
				yield this[key]
			}
		}
	}

	get children() {
		return [...this.iterateChildren()]
	}
}
