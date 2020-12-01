/**
 * Swap array elements in place. Runtime: O(1)
 * @param {array} arr to be modified
 * @param {number} from index of the first element
 * @param {number} to index of the 2nd element
 * @returns {void}
 */

export function arrSwap (arr,from,to) {
	;[ arr[ from ],arr[ to ] ] = [ arr[ to ],arr[ from ] ]
}
