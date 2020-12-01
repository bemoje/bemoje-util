import { randomIntBetween } from './randomIntBetween'


export class CommonBase {
	get i () {
		let i = this.meta.get(INDEX_SYMBOL)
		if (i === undefined) {
			i = new Uint32Array(randomIntBetween(0,Math.pow(2,32)))
			this.meta.set(META_SYMBOL,i)
		}
		return i
	}

	get id () {
		return new Uint32Array([ this.constructor.i[ 0 ],this.i[ 0 ] ])
	}

	get meta () {
		let meta = this[ META_SYMBOL ]
		if (!meta) {
			meta = meta.get(this.constructor.prototype).get(this.id)
			this[ META_SYMBOL ] = meta
		}
		return meta
	}

	get props () {
		let props = this[ PROPS_SYMBOL ]
		if (!props) {
			props = new Map()
			this[ PROPS_SYMBOL ] = props
		}
		return props
	}

	createProperty (key) {
		Object.defineProperty(this,key)
	}

	init () {
		this.createProperty(META_SYMBOL)
		Object.defineProperty(this,PROPS_SYMBOL,{ value: new Map() })
	}
	ownKeys () {
		return Reflect.ownKeys(this)
	}
	descriptor (key) {
		return Object.getOwnPropertyDescriptor(key)
	}
}
