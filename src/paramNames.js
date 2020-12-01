import { parseScript } from 'esprima'
import { sourceRefactorArrowFunctionToNamedFunction } from './sourceRefactorArrowFunctionToNamedFunction'

export function paramNames(f) {
	try {
		const ast = parseScript(
			sourceRefactorArrowFunctionToNamedFunction(f.toString())
		)
		return ast.body[0].params.map((p) => {
			const t = p.type
			return p.name
				? p.name
				: t === 'AssignmentPattern'
				? p.left.name
				: '...' + p.argument.name
		})
	} catch (e) {
		return []
	}
}

paramNames.docs = [
	`Parse a function's parameter names using esprima AST parser.`,
	{
		params: {
			f: Function,
		},
		returns: [String],
	},
]

paramNames.test = [
	'can parse normal parameters',
	(f) => {
		deq(
			f((a, b, c) => {}),
			['a', 'b', 'c']
		)
	},
	'can parse default parameters',
	(f) => {
		deq(
			f((a = { a: 1 }, b = 1, c = 'a') => {}),
			['a', 'b', 'c']
		)
	},
	'can parse rest parameter',
	(f) => {
		deq(f(a, b, c, ...rest), ['a', 'b', 'c', '...rest'])
	},
]

paramNames.example = [
	function fn(
		noDefault,
		nul = null,
		undef = undefined,
		string = 'John',
		number = 512.87,
		boolean = true,
		numberArray = [0, 1],
		stringArray = ['a', 'b'],
		options = {
			a: 1,
			b: 2,
		},
		...rest
	) {},
]
