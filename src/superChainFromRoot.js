import { superChain } from './superChain'


export function superChainFromRoot (o) {
	return superChain(o).reverse()
}
