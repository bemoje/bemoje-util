
export function assertUpperCase (str) {
	if (str.toUpperCase() !== str) {
		throw new Error('Expected string to be upper case')
	}
}
