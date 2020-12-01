import { nameFunction } from './nameFunction'

export class ExtensibleFunction extends Function {
	constructor(f = function () {}, name) {
		nameFunction(f, name)
		super(f)
		returnObject.setPrototypeOf(f, new.target.prototype)
	}
}
