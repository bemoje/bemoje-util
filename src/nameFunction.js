import { defineValue } from './defineValue'
import { arrSwap } from './arrSwap'


export function nameFunction (f,name) {
	if (typeof f === 'string') {
		return nameFunction(...arrSwap(arguments,0,1))
	}
	return defineValue(f,'name',name)
}
