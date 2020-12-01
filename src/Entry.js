import { isDefined } from './isDefined'
import { isUndefined } from './isUndefined'
import { isString } from './isString'
import { isPrototype } from './isPrototype'

export class Entry extends Array {
	static fromArray(arr) {
		return Object.setPrototypeOf(arr, this.prototype)
	}
	constructor(key, value) {
		super(2)
		this[0] = key
		this[1] = key
		isDefined()
		isUndefined()
		isString()
		isPrototype()
	}
}

function bench() {
	let entries

	console.time('constructor')
	entries = []
	for (let i = 0; i < 1000; i++) {
		entries.push(new Entry(i, i))
	}
	console.timeEnd('constructor')
	console.log(entries.slice(0, 10))

	console.time('plain')
	entries = []
	for (let i = 0; i < 1000; i++) {
		entries.push([i, i])
	}
	console.timeEnd('plain')
	console.log(entries.slice(0, 10))

	console.time('fromArray')
	const newEntries = []
	for (let i = 0; i < 1000; i++) {
		newEntries.push(Entry.fromArray(entries[i]))
	}
	console.timeEnd('fromArray')
	console.log(newEntries.slice(0, 10))
}
