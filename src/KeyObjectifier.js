import { DefaultWeakMap, DefaultMap } from 'mnemonist'
import hashString from 'hash-string'
import { isIntegerStringKey } from './isIntegerStringKey'

const ensureStrKeyIntHash = (key) => {
	if (typeof key === 'string') {
		if (isIntegerStringKey(key)) {
			return parseInt(key)
		}
		return hashString(key)
	}
	return key
}

class HashedKeyPlaceholder {}

const oKeys = new DefaultWeakMap(
	() => new DefaultMap(() => new HashedKeyPlaceholder())
)

export class KeyObjectifier {
	/**
	 * Symbol, index and string keys are hashed and
	 * @param {string|number|symbol} key - The key to objectify
	 */
	objectify(key) {
		return oKeys.get(this).get(ensureStrKeyIntHash(key))
	}
}

/*
const o = new KeyObjectifier()
const a = [
	0,
	-0,
	'0',
	null,
	undefined,
	true,
	false,
	new Uint8Array([4, 5, 4, 2]),
].map((key) => o.objectify(key))
console.log(a)
console.log(Object(undefined))
*/
