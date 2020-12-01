/**
 * Object.prototype.toString util. Features methods that get
 * - tag       from: object, class or className
 * - className from: object or tag
 * @module ts-tag
 */

const ots = Object.prototype.toString

/**
 * Returns toStringTag or class-name from object, utilizing @see Object.prototype.toString
 * @param {*} object
 * @param {boolean} [className=false] - Whether to return the class name part of the tag instead of the whole tag.
 * @returns {string} toStringTag
 *
 * @example
 * // get full toStringTag
 * tsTag(/abc/)
 * //=> '[object RegExp]'
 *
 *
 * // get only the className part of the tag
 * tsTag(/abc/, true)
 * //=> 'RegExp'
 */
export function tsTag(object, className) {
	return className ? tagToClassName(ots.call(object)) : ots.call(object)
}

/**
 * Convert a class/constructor to a toStringTag
 * @param {string} tag
 * @returns {string} toStringTag
 *
 * @example
 * import { tagToClassName } from 'ts-tag'
 *
 * tagToClassName('[object Array]')
 * //=> 'Array'
 */
export function tagToClassName(tag) {
	return tag.substring(8, tag.length - 1)
}

/**
 * Convert a class/constructor name to a toStringTag
 * @param {string} className
 * @returns {string} toStringTag
 *
 * @example
 * import { classNameToTag } from 'ts-tag'
 *
 * classNameToTag('Array')
 * //=> '[object Array]'
 */
export function classNameToTag(className) {
	return `[object ${className}]`
}

/**
 * Convert a class/constructor to a toStringTag
 * @param {Function} klass - constructor function
 * @returns {string} toStringTag
 *
 * @example
 * import { convert } from 'ts-tag'
 *
 * convert.classToTag(Array)
 * //=> '[object Array]'
 */
export function classToTag(klass) {
	return classNameToTag(klass.name)
}

/**
 * Gets or creates a validator in a className-keyed cache.
 * If a value is provided, it is passed to the validator and the result of that is returned. Else, return validator.
 *
 * @param {string|Function} type - toStringTag, class-name or constructor
 * @param {*} [value] - a value to validate. If omitted, the validator is returned.
 * @returns {Function|boolean} function is[className](value) {}
 *
 * @example
 * // import
 * import { is } from 'ts-tag'
 *
 *
 * @example
 * // require
 * const { is } = require('ts-tag')
 *
 *
 * @example
 * // invoke-validator immediately on a value
 * is(String, 'wow')
 * //=> true
 *
 *
 * @example
 * // BEST PERFORMANCE: create-reusable type validator
 * const isString = is(String)
 *
 * isString('wow')
 * //=> true
 *
 * isString(3)
 * //=> false
 *
 *
 * @example
 * // This syntax is equivalent
 * is(RegExp)
 *
 * is.RegExp('wow')
 * //=> false
 *
 *
 * @example
 * // Accepted as first argument, 'type': constructors, class-names or toString-tags
 * is(RegExp)
 * is('RegExp')
 * is('[object RegExp]')
 *
 * // this cannot come first, but as soon as the generator is cached, it is available as a property on 'is'
 * is.RegExp === is(RegExp)
 * //=> true
 *
 *
 * @example
 * // THIS EXAMPLE EXPLAINS HOW THE CHECKS WORK UNDER THE HOOD, JUST THAT
 * // -------------------------------------------------------------------
 *
 * // The checks are based on comparing tags returned from Object.prototype.toString.
 * Object.prototype.toString.call([])
 * //=> [object Array]
 *
 *
 * // This is how a validator simply works under the hood. A known tag is compared to tags of objects.
 * function isArray(value) {
 *   return Object.prototype.toString.call(value) === '[object Array]'
 * }
 *
 * isArray([])
 * //=> true
 *
 *
 * // This module simplifies creating these validators to this:
 * import { is } from 'ts-tag'
 *
 * const isRegExp = is(RegExp)
 *
 * isRegExp(/re/)
 * //=> true
 *
 *
 * // create more?
 * const isString = is(String)
 * const isFunction = is(Function)
 * const isGeneratorFunction = is('GeneratorFunction')
 *
 * isString('abc')
 * //=> true
 * isFunction(function f() {})
 * //=> true
 * isGeneratorFunction(function* gf() {})
 * //=> true
 */
export function is(type, value) {
	// parse type
	const typeIsClass = typeof type !== 'string'
	let typeIsTag

	// class name
	const className = typeIsClass
		? type.name
		: (typeIsTag = !typeIsClass && type.charAt(0) === '[')
		? tagToClassName(type)
		: type

	// get from cache
	let validator = is[className]

	// if not in cache
	if (!validator) {
		const tag = typeIsTag ? type : classNameToTag(className)

		validator = function (value) {
			return ots.call(value) === tag
		}

		// set name
		Object.defineProperty(validator, 'name', { value: 'is' + className })

		// cache
		is[className] = validator
	}

	// return validator or validate value
	return value === undefined ? validator : validator(value)
}

tsTag.tsTag = tsTag
tsTag.tagToClassName = tagToClassName
tsTag.classNameToTag = classNameToTag
tsTag.classToTag = classToTag
tsTag.is = is

export default tsTag
