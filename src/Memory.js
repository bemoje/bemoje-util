import os from 'os'

export class Bytes extends Number {
	constructor(bytes) {
		super(bytes)
	}
	get KB() {
		return Math.round(this / 1000)
	}
	get MB() {
		return Math.round(this.KB / 1000)
	}
	get GB() {
		return Math.round(this.MB / 1000)
	}
	get TB() {
		return Math.round(this.GB / 1000)
	}
	toString(unit = 'MB') {
		unit = unit.toUpperCase()
		return this[unit] + ' ' + unit
	}
}

export class Memory {
	static get total() {
		return new Bytes(os.totalmem())
	}

	static get free() {
		return new Bytes(os.freemem())
	}

	static get using() {
		return new Bytes(os.totalmem() - os.freemem())
	}
}
