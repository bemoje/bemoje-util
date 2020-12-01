import { KeyObjectifier } from '../src/KeyObjectifier'
import { assert } from 'chai'

describe('objectify', () => {
	const ins = new KeyObjectifier()
	const insA = new KeyObjectifier()
	const insB = new KeyObjectifier()

	it('returns same object with same owner and not with different owner', () => {
		const keys = ['string', -0, -1, 0, 1, '-0', '-1', '0', '1']
		for (const key of keys) {
			assert.strictEqual(ins.objectify(key), ins.objectify(key))
			assert.notStrictEqual(insA.objectify(key), insB.objectify(key))
		}
	})

	it('symbols are not evaluated as identical', () => {
		assert.strictEqual(
			ins.objectify(Symbol.iterator),
			ins.objectify(Symbol.iterator)
		)
		assert.notStrictEqual(
			insA.objectify(Symbol('hello')),
			insB.objectify(Symbol('hello'))
		)
		assert.notStrictEqual(ins.objectify(Symbol()), ins.objectify(Symbol()))
	})
	it('zero and negative zero are normalized', () => {
		const unique = Array.from(
			new Set([0, -0, '-0', '0'].map((key) => ins.objectify(key)))
		)
		assert.strictEqual(unique.length, 1)
	})
	it('similar values of different type are NOT normalized', () => {
		const assertNotSameResult = (key1, key2) => {
			assert.notStrictEqual(ins.objectify(key1), ins.objectify(key2))
		}
		const assertSameResult = (key1, key2) => {
			assert.strictEqual(ins.objectify(key1), ins.objectify(key2))
		}

		assertNotSameResult('blah', Symbol('blah'))
		assertNotSameResult('', Symbol(''))
		assertSameResult(25, '25')
	})
})
