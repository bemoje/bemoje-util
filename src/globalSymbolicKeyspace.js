import { SymbolicKeyspace } from './SymbolicKeyspace'
import { defineValue } from './defineValue'
import { GLOBAL } from './GLOBAL'

export function globalSymbolicKeyspace() {
	if (!('symbolicKeyspace' in GLOBAL)) {
		defineValue(
			GLOBAL,
			'symbolicKeyspace',
			function (target, rootKey = 'SYMKEY') {
				rootKey = rootKey.toUpperCase()
				class Node extends SymbolicKeyspace {
					static key = rootKey
					static root = new Node()
				}
				const root = new Node(SymbolicKeyspace, rootKey + ' ROOT')
				defineValue(target, rootKey, root)
				return root
			}
		)
		symbolicKeyspace(GLOBAL)
	}
}

/*
SYMKEY.createKey(
	'FUNCTION_INITIALIZERS',
	'a set of functions to instantiate custom function classes.'
)
SYMKEY.createChild('ID', 'unique identifier')
SYMKEY.ID.createKey('INDEX', 'incrementing index')
SYMKEY.ID.createChild('RANDOM', 'random')
SYMKEY.ID.RANDOM.createChild('SAFE', 'cryptographically safe')
SYMKEY.ID.RANDOM.createChild('UNSAFE', 'cryptographically safe')
SYMKEY.createKey('META', 'meta data')

const INDEX_SYMBOL = Symbol('index')
const META_SYMBOL = Symbol('meta')
const PROPS_SYMBOL = Symbol('properties')
const INITIALIZERS_SYMBOL = Symbol('initializers')

console.log(SYMKEY)
console.log(SYMKEY.ID.RANDOM.SAFE)
*/
