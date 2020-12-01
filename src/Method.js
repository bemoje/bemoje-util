import { XtFunction } from './XtFunction'


export class Method extends XtFunction {
	constructor (name,f,config = {}) {
		super(name,f,config)
		// config as properties on self
		Object.assign(this,config)
	}
}
