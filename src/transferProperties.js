import { transferProperty } from './transferProperty'

/**
 * @returns {void}
 */

export function transferProperties (target,source,filter) {
	const isStatic = typeof source === 'function'
	for (const key of Reflect.ownKeys(source)) {
		if (key !== 'constructor') {
			if (!isStatic || (key !== 'prototype' && key !== 'length')) {
				if (!filter || filter(key)) {
					transferProperty(target,key,source)
				}
			}
		}
	}
}
