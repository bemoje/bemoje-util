/**
 * Change arrow function source string into a regular named function.
 * @param {Function|string} f - the function or its source code
 * @returns {string}
 */

export function sourceRefactorArrowFunctionToNamedFunction (f) {
	let s = f.toString()
	let name = '_'
	const r = /^(function )?(\w+)\(/.exec(s)
	if (r && r[ 2 ])
		name = r[ 2 ]
	const i = s.indexOf('(')
	const li = s.lastIndexOf('}')
	return (
		'function ' +
		name +
		s.substring(i,li + 1).replace(/(?!\n|\{)(\) *=> *)\{/,') {')
	)
}
