import { defineMethod } from './defineMethod'
import { defineLoyalValue } from './defineLoyalValue'
import { superChain } from './superChain'
import { XtFunction } from './XtFunction'

// ----------------------------------------------

export class Class extends XtFunction {
	constructor(name, config) {
		let composers
		let handleArgs
		super(
			name,
			class {
				constructor() {
					const args = handleArgs(arguments)
					for (const f of composers) {
						f.apply(this, args)
					}
					this.args = args
					//return Object.setPrototypeOf(this, XtObject.prototype)
				}
			},
			config
		)

		// set composers and args-handler after super call
		composers = this.composers
		handleArgs = this.handleArgs

		// is[className]
		const self = this
		defineMethod(
			this,
			'is' + this.name,
			function (instance, acceptDescendant = true) {
				return instance === self
					? true
					: acceptDescendant
					? instance instanceof self
					: instance.constructor === self
			}
		)

		// composers
		defineLoyalValue(this, 'composers', () => new Set())
	}
	//get superClass() {
	//	const C = Object.getPrototypeOf(this)
	//	return C.prototype ? C : C.constructor
	//}
	//*prototypeChain(fromRoot) {
	//	if (fromRoot) {
	//		const rev = [...this.prototypeChain()]
	//		rev.reverse()
	//		yield* rev
	//	} else {
	//		const Super = this.superClass
	//		yield this
	//		if (Super.prototypeChain) {
	//			yield* Super.prototypeChain()
	//		} else {
	//			yield Class
	//			yield Method
	//			yield Function
	//			yield Object
	//		}
	//	}
	//}
	handleArgs(args) {
		return Array.from(args)
	}
	get composers() {
		return composers.get(this)
	}
	compose(f) {
		this.composers.add(f)
		return this
	}
	mixin(klass) {
		if (klass instanceof Class) {
			for (const C of superChain(klass).slice(2).reverse()) {
				for (const f of C.initializers) {
					this.use(f)
				}
				for (const f of C.composers) {
					this.composers.add(f)
				}
			}
		} else {
		}
	}
}

function wip() {
	// -------------------------------------------

	const Func = new XtFunction('Func')
	console.log('------------------------------------')
	console.log(Func)
	console.log('------------------------------------')

	console.log(Method)
	console.log(Class)
	const Wow = new Class('Wow')
	console.log(Wow)
	Wow.compose(function () {
		this.cool = true
	})
	const wow = new Wow()
	console.log(wow)
	console.log(Wow.isClass)
	console.log(Wow.isFunction)
	console.log(Reflect.ownKeys(Class.prototype))
	console.log(prototypeChain.array(Wow))

	class Wowow extends Wow {
		constructor() {
			super(...arguments)
		}
	}
	console.log(prototypeChain.array(Wowow))
}
