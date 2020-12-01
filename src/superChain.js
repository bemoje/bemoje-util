import { isConstructor } from './isConstructor'

export function superChain(o) {
	const fo = new Set([Function, Function.prototype, Object, Object.prototype])
	const chain = [o]

	let prototype = o
	while ((prototype = Object.getPrototypeOf(prototype))) {
		if (!fo.has(prototype)) {
			chain.push(prototype)
		}
	}
	if (isConstructor(o)) {
		chain.push(Function, Object)
	} else {
		chain.push(Function.prototype, Object.prototype)
	}
	return chain
}
