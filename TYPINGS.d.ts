declare module "isDefined" {
    /**
     * Determine wheter the argument is a Undefined
     * @param {*} value
     * @returns {boolean}
     */
    export function isDefined(value: any): boolean;
}
declare module "isFunction" {
    /**
     * Determine wheter the argument is a Function
     * @param {*} value
     * @returns {boolean}
     */
    export function isFunction(value: any): boolean;
}
declare module "isSymbol" {
    /**
     * Determine wheter the argument is a Symbol
     * @param {*} value
     * @returns {boolean}
     */
    export function isSymbol(value: any): boolean;
}
declare module "sourceRefactorArrowFunctionToNamedFunction" {
    /**
     * Change arrow function source string into a regular named function.
     * @param {Function|string} f - the function or its source code
     * @returns {string}
     */
    export function sourceRefactorArrowFunctionToNamedFunction(f: Function | string): string;
}
declare module "paramNames" {
    export function paramNames(f: any): any;
    export namespace paramNames {
        const docs: (string | {
            params: {
                f: FunctionConstructor;
            };
            returns: StringConstructor[];
        })[];
        const test: (string | ((f: any) => void))[];
        const example: ((noDefault: any, nul?: any, undef?: any, string?: string, number?: number, boolean?: boolean, numberArray?: number[], stringArray?: string[], options?: {
            a: number;
            b: number;
        }, ...rest: any[]) => void)[];
    }
}
declare module "isObject" {
    /**
     * Determine wheter the argument is a Object
     * Definition summary: is typeof object but not null
     * @param {*} value
     * @returns {boolean}
     */
    export function isObject(value: any): boolean;
    export default isObject;
}
declare module "isPrototype" {
    /**
     * Determine wheter a given object is a prototype-object.
     * Definition summary: obj.constructor.prototype === obj
     * @param {*} value
     * @returns {boolean}
     */
    export function isPrototype(value: any): boolean;
    export default isPrototype;
}
declare module "isConstructor" {
    /**
     * Determine if value is a constructor function
     * @param {*} value
     * @returns {boolean}
     */
    export function isConstructor(value: any): boolean;
    export default isConstructor;
}
declare module "superChain" {
    export function superChain(o: any): any[];
}
declare module "api" {
    /**
     * Traverse the prototype chain of a provided class function object, extracting an API overview of methods, getters,
     * setters of static and prototype properties.
     * @param {Function} klass - the class function object to parse
     * @param {boolean} [toString=false] - Instead of returning an Array of APIElement instances, return string
     * representations/descriptions.
     * @returns {Array<APIElement|string>}
     */
    export function api(klass: Function, toString?: boolean): Array<APIElement | string>;
    class APIElement {
        constructor(parent: any, klass: any, isStatic: any, key: any, isMethod: any, isGetter: any, isSetter: any);
        class: any;
        key: any;
        isStatic: any;
        isPrototype: boolean;
        isMethod: any;
        isProperty: boolean;
        isGetter: any;
        isSetter: any;
        isSymbolKeyed: boolean;
        paramNames: any;
        toString(): string;
    }
    export {};
}
declare module "arrSwap" {
    /**
     * Swap array elements in place. Runtime: O(1)
     * @param {array} arr to be modified
     * @param {number} from index of the first element
     * @param {number} to index of the 2nd element
     * @returns {void}
     */
    export function arrSwap(arr: any[], from: number, to: number): void;
}
declare module "assertKeyAvailable" {
    export function assertKeyAvailable(target: any, key: any): void;
}
declare module "assertUpperCase" {
    export function assertUpperCase(str: any): void;
}
declare module "DIRPATH" {
    /**
     * Get paths from the running enviromment.
     * Windows, OS X and common Linux distributions are supported.
     */
    export class DIRPATH {
        /**
         * Get the running environment operating system's logged in user's appdata path.
         * @param {...string} [paths=[]] - additional path names may be added and they will be joined into the returned path string.
         * @returns {string}
         * @example
         * DIRPATH.DATA('some', 'dir', 'file.js')
         * //=> 'C:/Users/User/AppData/Roaming/some/dir/file.js',
         */
        static DATA(...paths?: string[]): string;
        /**
         * Get the running environment operating system's logged in user's desktop path.
         * @param {...string} [paths=[]] - additional path names may be added and they will be joined into the returned path string.
         * @returns {string}
         * @example
         * DIRPATH.DESKTOP('some', 'dir', 'file.js')
         * //=> 'C:/Users/User/Desktop/some/dir/file.js',
         */
        static DESKTOP(...paths?: string[]): string;
        /**
         * Get the running environment operating system's logged in user's home path.
         * @param {...string} [paths=[]] - additional path names may be added and they will be joined into the returned path string.
         * @returns {string}
         * @example
         * DIRPATH.HOME('some', 'dir', 'file.js')
         * //=> 'C:/Users/User/some/dir/file.js',
         */
        static HOME(...paths?: string[]): string;
        /**
         * Get the running environment operating system's logged in user's path for temporary files.
         * @param {...string} [paths=[]] - additional path names may be added and they will be joined into the returned path string.
         * @returns {string}
         * @example
         * DIRPATH.TEMP('some', 'dir', 'file.js')
         * //=> 'C:/Users/User/AppData/Local/Temp/some/dir/file.js',
         */
        static TEMP(...paths?: string[]): string;
        /**
         * Get the current working directory of the current process.
         * @param {...string} [paths=[]] - additional path names may be added and they will be joined into the returned path string.
         * @returns {string}
         * @example
         * DIRPATH.CWD('some', 'dir', 'file.js')
         * //=> 'C:/WINDOWS/system32/some/dir/file.js'
         */
        static CWD(...paths?: string[]): string;
    }
}
declare module "autoPackage" {
    export const autoPackage: "";
}
declare module "isUndefined" {
    /**
     * Determine wheter the argument is undefined
     * @param {*} value
     * @returns {boolean}
     */
    export function isUndefined(value: any): boolean;
    export default isUndefined;
}
declare module "isString" {
    /**
     * @method isString
     * Determine wheter the argument is a String
     * @param {*} value
     * @returns {boolean}
     * @tag util is core bemoje
     */
    export function isString(value: any): boolean;
    export default isString;
}
declare module "defineProperty" {
    /**
     * Based on Reflect.defineProperty. The differences are:
     * - configurable is true by default
     * - writable removed from descriptor if has accessors
     * - returns 'target' object unless thats a prototype object, then return target.constructor
     * - disallows defining enumerable properties on prototype objects
     *
     * @method defineProperty
     * @memberof Object.prototype
     *
     * @param {Object} target - The target object
     * @param {string|symbol} key - The property key.
     * @param {object} [descriptor={}] - The own property descriptor.
     * @param {boolean} [descriptor.enumerable] - The 'enumerable' attribute. If true and 'this' is a prototype object, the
     * property is removed from the descriptor in order to disallow setting enumerable properties on prototypes.
     * @param {boolean} [descriptor.configurable=true] - The 'configurable' attribute.
     * @param {boolean} [descriptor.writable] - The 'writable' attribute. If 'get' or 'set' are defined, this attribue is
     * removed from the descriptor. This would cause an error, so this is just a convenient way to avoid it.
     * @param {*} [descriptor.value] - The 'value' attribute.
     * @param {function} [descriptor.get] - The 'get' attribute.
     * @param {function} [descriptor.set] - The 'set' attribute.
     * @returns {Object} this
     */
    export function defineProperty(target: any, key: string | symbol, descriptor?: {
        enumerable: boolean;
        configurable: boolean;
        writable: boolean;
        value: any;
        get: Function;
        set: Function;
    }): any;
}
declare module "defineValue" {
    /**
     * A convenience method almost identical to @see Object.prototype.defineProperty except that the 'value' attribute can be
     * set as arguments prior to the descriptor/attributes object.
     *
     * @method defineValue
     * @memberof Object.prototype
     *
     * @param {string|symbol} key - The property key.
     * @param {*} [value] - The 'value' attribute of an own property descriptor.
     * @param {object} [attributes={}] - Own boolean attributes of an property descriptor attributes.
     * @param {boolean} [attributes.enumerable] - The 'enumerable' attribute. If true and 'this' is a prototype object, the
     * property is removed from the descriptor in order to disallow setting enumerable properties on prototypes.
     * @param {boolean} [attributes.configurable=true] - The 'configurable' attribute.
     * @param {boolean} [attributes.writable] - The 'writable' attribute. If 'get' or 'set' are defined, this attribue is
     * removed from the descriptor. This would cause an error, so this is just a convenient way to avoid it.
     * @returns {Function} this
     *
     * @example
     * const o = {}
     * console.log(defineValue(o, 'a', 23, { enumerable: true }))
     * //=> { a: 23 }
     */
    export function defineValue(target: any, key: string | symbol, value?: any, attributes?: {
        enumerable: boolean;
        configurable: boolean;
        writable: boolean;
    }): Function;
}
declare module "nameFunction" {
    export function nameFunction(f: any, name: any, ...args: any[]): any;
}
declare module "ExtensibleFunction" {
    export class ExtensibleFunction extends Function {
        constructor(f: () => void, name: any);
    }
}
declare module "classOf" {
    /**
     * Returns the class constructor function that an object is associated with.
     * @returns {Function}
     *
     * @memberof Object.prototype
     *
     * @example
     * class Hello {}
     * classOf(Hello.prototype)
     * //=> Hello
     * classOf(new Hello())
     * //=> Hello
     *
     * class World extends Hello {}
     * classOf(World.prototype)
     * //=> World
     * classOf(new World())
     * //=> World
     *
     * classOf('string')
     * //=> String
     * classOf(true)
     * //=> Boolean
     * classOf(;(123))
     * //=> Number
     * classOf(NaN)
     * //=> Number
     * classOf(Infinity)
     * //=> Number
     *
     * classOf(Object.prototype)
     * //=> Object
     *
     * classOf(Function.prototype)
     * //=> Function
     *
     * classOf(Array.prototype)
     * //=> Array
     * classOf([])
     * //=> Array
     */
    export function classOf(target: any): Function;
}
declare module "defineLoyalValue" {
    /**
     * The provided 'factory' function works as a property value initializer. Actually, a getter accessor property is
     * created. The getter however, will use the factory to create a 'fresh' value if the executing 'this' context has
     * changed.
     *
     * For example, imagine we want a static class property that is an array containing instances of the class. If the class
     * is extended, the extension class will then be putting its instances into its super-class's array. If this is not
     * desired, this is where 'defineLoyalValue' is handy. If the execution context has changed, and in this case it has,
     * because the new context is the sub-class. Then a new array could be created instead of pointing to the original if
     * the factory returned a fresh array. See the example.
     *
     * @method defineLoyalValue
     * @memberof Object.prototype
     *
     * @param {string|symbol} key - The property key.
     * @param {function} factory - A factory function that when invoked, returns the property value.
     * @param {object} [attributes={}] - Own boolean attributes of an property descriptor attributes.
     * @param {boolean} [attributes.enumerable] - The 'enumerable' attribute.
     * @param {boolean} [attributes.configurable] - The 'configurable' attribute.
     * @param {boolean} [attributes.writable] - The 'writable' attribute.
     * @returns {Function} this
     *
     * @example
     * class A {
     *   constructor() {
     *     this.index = ++this.nextIndex
     *     this.instances.push(this)
     *   }
     * }
     *
     * defineLoyalValue(A.prototype, 'instances', () => [])
     * defineLoyalValue(A.prototype, 'nextIndex', () => 0, { writable: true })
     *
     * class B extends A {
     *   constructor() {
     *     super()
     *   }
     * }
     *
     * new A()
     * new A()
     * new B()
     * new B()
     * new A()
     *
     * A.prototype.instances
     * //=> [ A { index: 1 }, A { index: 2 }, A { index: 3 }
     *
     * B.prototype.instances
     * //=> [ B { index: 1 }, B { index: 2 } ]
     */
    export function defineLoyalValue(target: any, key: string | symbol, factory: Function, attributes?: {
        enumerable: boolean;
        configurable: boolean;
        writable: boolean;
    }): Function;
}
declare module "transferProperty" {
    /**
     * @returns {void}
     */
    export function transferProperty(target: any, key: any, source: any): void;
}
declare module "superChainFromRoot" {
    export function superChainFromRoot(o: any): any[];
}
declare module "GLOBAL" {
    /**
     * The global object in the current running environment.
     * This object is set on the global object, so that it can always be referencéd as 'GLOBAL'.
     *
     * @constant {object} GLOBAL
     */
    export const GLOBAL: any;
}
declare module "SymbolicKeyspace" {
    export class SymbolicKeyspace {
        constructor(parent: any, description?: string);
        description: string;
        key(key: any, description: any): SymbolicKeyspace;
        child(key: any, description: any): any;
        iterateChildren(): Generator<any, void, unknown>;
        get children(): any;
    }
}
declare module "globalSymbolicKeyspace" {
    export function globalSymbolicKeyspace(): void;
}
declare module "XtFunction" {
    export class XtFunction extends ExtensibleFunction {
        constructor(name: any, f: any, config?: {});
        initializers(): Generator<any, void, unknown>;
        use(f: any): XtFunction;
        get i(): any;
        staticMixin(Source: any, filter: any): void;
        prototypeMixin(Source: any, filter: any): void;
        mixin(Source: any): void;
    }
    import { ExtensibleFunction } from "ExtensibleFunction";
}
declare module "Method" {
    export class Method extends XtFunction {
        constructor(name: any, f: any, config?: {});
    }
    import { XtFunction } from "XtFunction";
}
declare module "defineMethod" {
    /**
     * A convenience method almost identical to @see Object.prototype.defineProperty except that the 'value' attribute can be
     * set as argument, 'f' prior to the descriptor/attributes object.
     *
     * If 'f' is a named function, then the 'key' argument can be omitted entirely. If key is not omitted and 'f' is
     * not a named function, then its name will be set to that of 'key', unless 'key' is a symbol type, then the symbol's
     * inner description will become the function name.
     *
     * @method method
     * @memberof Object.prototype
     *
     * @param {string|symbol} key - The property key.
     * @param {function} f - The 'value' attribute of an own property descriptor (expecting a function).
     * @param {object} [attributes={}] - Own boolean attributes of an property descriptor attributes.
     * @param {boolean} [attributes.enumerable] - The 'enumerable' attribute. If true and 'this' is a prototype object, the
     * property is removed from the descriptor in order to disallow setting enumerable properties on prototypes.
     * @param {boolean} [attributes.configurable=true] - The 'configurable' attribute.
     * @param {boolean} [attributes.writable] - The 'writable' attribute. If 'get' or 'set' are defined, this attribue is
     * removed from the descriptor. This would cause an error, so this is just a convenient way to avoid it.
     * @returns {Object} this
     *
     * @example
     * class A {}
     *
     * defineMethod(A.prototype, 'hello', function () {
     *   return 'world'
     * })
     *
     * defineMethod(A.prototype, function hi() {
     *   return 'there'
     * })
     *
     * const a = new A()
     *
     * a.hello()
     * //=> 'world'
     *
     * a.hi()
     * //=> 'there'
     */
    export function defineMethod(target: any, key: string | symbol, f: Function, attributes?: {
        enumerable: boolean;
        configurable: boolean;
        writable: boolean;
    }): any;
}
declare module "Class" {
    export class Class extends XtFunction {
        constructor(name: any, config: any);
        handleArgs(args: any): any[];
        get composers(): any;
        compose(f: any): Class;
    }
    import { XtFunction } from "XtFunction";
}
declare module "color" {
    export const color: any;
}
declare module "randomIntBetween" {
    export function randomIntBetween(min: any, max: any): number;
}
declare module "CommonBase" {
    export class CommonBase {
        get i(): any;
        get id(): Uint32Array;
        get meta(): any;
        get props(): any;
        createProperty(key: any): void;
        init(): void;
        ownKeys(): (string | number | symbol)[];
        descriptor(key: any): PropertyDescriptor;
    }
}
declare module "createProperty" {
    export function createProperty(target: any, key: any): void;
}
declare module "DefaultMap" {
    export {};
}
declare module "DefaultWeakMap" {
    export {};
}
declare module "defineAlias" {
    /**
     * Create property key aliases.
     *
     * If the object is a prototype object and no property exists on it by the name of 'key', it is assumed that it is meant
     * to be found on its associated instances, in which case an accessor 'getter' property that returns the value at 'key'
     * is created instead of a direct reference value. When aliasing instance properties, it makes sense to perform aliasing
     * on the prototype like this, since it is 'cheaper' in terms of performance because then it's not necessary to create
     * the alias-property on each instance, but just this once on the prototype.
     *
     * @param {string|symbol} key - The property key.
     * @param {...(string|symbol)} [aliases=[]] - Aliases for 'key'.
     * @returns {Function} this
     *
     * @example
     * class A {
     *   static analyze() {}
     *
     *   constructor() {
     *     this.i = 0
     *   }
     * }
     *
     *
     * defineAlias(A, 'analyze', 'analyse')
     *
     * A.analyze === A.analyse
     * //=> true
     *
     *
     * defineAlias(A.prototype, 'i', 'index')
     * const a = new A()
     *
     * a.i === a.index
     * //=> true
     */
    export function defineAlias(target: any, key: string | symbol, ...aliases?: (string | symbol)[]): Function;
}
declare module "defineGetter" {
    /**
     * A convenience method almost identical to @see Object.prototype.defineProperty except that the 'get' attribute can be
     * set as arguments prior to the descriptor/attributes object.
     *
     * @method getter
     * @memberof Object.prototype
     *
     * @param {string|symbol} key - The property key.
     * @param {function|any} [get] - The 'get' attribute of an own property descriptor. If 'get' is not a function, a
     * function that returns the value is created and used in its place.
     * @param {object} [attributes={}] - Own boolean attributes of an property descriptor attributes.
     * @param {boolean} [attributes.enumerable] - The 'enumerable' attribute. If true and 'this' is a prototype object, the
     * property is removed from the descriptor in order to disallow setting enumerable properties on prototypes.
     * @param {boolean} [attributes.configurable=true] - The 'configurable' attribute.
     * @param {boolean} [attributes.writable] - The 'writable' attribute. If 'get' or 'set' are defined, this attribue is
     * removed from the descriptor. This would cause an error, so this is just a convenient way to avoid it.
     * @returns {Function} this
     *
     * @example
     * class A {
     *   constructor() {
     *     this._key = 0
     *   }
     * }
     *
     * const a = new A()
     *
     * defineGetter(A.prototype, 'key', function () {
     *   return this._key
     * })
     *
     * defineSetter(A.prototype, 'key', function (value) {
     *   this._key = value
     * })
     *
     * a.key
     * //=> 0
     *
     * a.key = 23
     *
     * a.key
     * //=> 23
     */
    export function defineGetter(target: any, key: string | symbol, get?: Function | any, attributes?: {
        enumerable: boolean;
        configurable: boolean;
        writable: boolean;
    }): Function;
}
declare module "isPrimitive" {
    /**
     * Determine wheter the argument is a Primitive
     * @param {*} value
     * @returns {boolean}
     * @tag util is core bemoje
     */
    export function isPrimitive(value: any): boolean;
    export default isPrimitive;
}
declare module "defineLazyValue" {
    /**
     * Define a placeholder-accessor-property on the object such that the provided 'factory' function is not invoked until
     * the property is accessed. When it is, the factory function is expected to return the 'real' property value. The
     * property is reconfigured to hold a value instead of the placeholding accessor setup. The factory's return value is
     * then set as value and also returned.
     *
     * If the property attribute 'writable' is true, a 'setter' is created. The setter will not invoke the factory function.
     * This makes no sense if we are just about to replace it anyway with the value that the setter just received.
     *
     * Incidentally, if 'defineLazyValue' is called with a prototype object as the execution context, when its time to
     * replace the surrogate accessor property, then instead of setting the new value via the factory function, it will
     * instead be set on the object that at the time is the execution context ('this'). This is most likely the use case.
     * One might be interested in setting a property on all instances of a class, but not until it is needed. So we can
     * define it lazily with 'defineLazyValue'.
     *
     * @method defineLazyValue
     * @memberof Object.prototype
     *
     * @param {string|symbol} key - The property key.
     * @param {function} factory - A factory function that when invoked, returns the property value.
     * @param {object} [attributes={}] - Own boolean attributes of an property descriptor attributes.
     * @param {boolean} [attributes.enumerable] - The 'enumerable' attribute. If true and 'this' is a prototype object, the
     * property is removed from the descriptor in order to disallow setting enumerable properties on prototypes.
     * @param {boolean} [attributes.configurable=true] - The 'configurable' attribute.
     * @param {boolean} [attributes.writable] - The 'writable' attribute. If 'get' or 'set' are defined, this attribue is
     * removed from the descriptor. This would cause an error, so this is just a convenient way to avoid it.
     * @returns {Function} this
     *
     * @example
     * class Ins {
     *   doneWork = false
     * }
     *
     * // 'factory' example
     * function heavyComputation() {
     *   // factory's 'this'-context is the instance
     *   this.doneWork = true
     *
     *   // do "heavy" work
     *   return 40 + 2
     * }
     *
     * // create lazy value property
     * Ins.prototype.defineLazyValue('lazyValue', heavyComputation, {
     *   // writable -> create setter
     *   writable: true,
     *   enumerable: true,
     * })
     *
     * // instances
     * const a = new Ins()
     * const b = new Ins()
     *
     * // console log
     * const logValue = (result) => console.log('\nvalue: ' + result)
     * const status = () => console.log('\n', a, '\n', b, '\n')
     *
     * // demo
     * status()
     *
     * logValue(a.lazyValue)
     * status()
     *
     * a.lazyValue = 'overwrite after'
     * logValue(a.lazyValue)
     * status()
     *
     * b.lazyValue = 'overwrite before'
     * logValue(b.lazyValue)
     * status()
     *
     * //=> [CONSOLE OUTPUT]:
     * // ------------------
     * //
     * //  Ins { doneWork: false }
     * //  Ins { doneWork: false }
     * //
     * //
     * // value: 42
     * //
     * //  Ins { doneWork: true, lazyValue: 42 }
     * //  Ins { doneWork: false }
     * //
     * //
     * // value: overwrite after
     * //
     * //  Ins { doneWork: true, lazyValue: 'overwrite after' }
     * //  Ins { doneWork: false }
     * //
     * //
     * // value: overwrite before
     * //
     * //  Ins { doneWork: true, lazyValue: 'overwrite after' }
     * //  Ins { doneWork: false, lazyValue: 'overwrite before' }
     * //
     */
    export function defineLazyValue(target: any, key: string | symbol, factory: Function, attributes?: {
        enumerable: boolean;
        configurable: boolean;
        writable: boolean;
    }): Function;
}
declare module "defineSetter" {
    /**
     * A convenience method almost identical to @see Object.prototype.defineProperty except that the 'set' attribute can be
     * set as arguments prior to the descriptor/attributes object.
     *
     * @method setter
     * @memberof Object.prototype
     *
     * @param {string|symbol} key - The property key.
     * @param {function} [set] - The 'set' attribute of an own property descriptor.
     * @param {object} [attributes={}] - Own boolean attributes of an property descriptor attributes.
     * @param {boolean} [attributes.enumerable] - The 'enumerable' attribute. If true and 'this' is a prototype object, the
     * property is removed from the descriptor in order to disallow setting enumerable properties on prototypes.
     * @param {boolean} [attributes.configurable=true] - The 'configurable' attribute.
     * @param {boolean} [attributes.writable] - The 'writable' attribute. If 'get' or 'set' are defined, this attribue is
     * removed from the descriptor. This would cause an error, so this is just a convenient way to avoid it.
     * @returns {Function} this
     *
     * @example
     * class A {
     *   constructor() {
     *     this._key = 0
     *   }
     * }
     *
     * const a = new A()
     *
     * defineGetter(A.prototype, 'key', function () {
     *   return this._key
     * })
     *
     * defineSetter(A.prototype, 'key', function (value) {
     *   this._key = value
     * })
     *
     * a.key
     * //=> 0
     *
     * a.key = 23
     *
     * a.key
     * //=> 23
     */
    export function defineSetter(target: any, key: string | symbol, set?: Function, attributes?: {
        enumerable: boolean;
        configurable: boolean;
        writable: boolean;
    }): Function;
}
declare module "isCharCodeDigit" {
    export function isCharCodeDigit(code: any): boolean;
}
declare module "isCharCodeDash" {
    export function isCharCodeDash(code: any): boolean;
}
declare module "isCharCodeZero" {
    export function isCharCodeZero(code: any): boolean;
}
declare module "isIntegerStringKey" {
    export function isIntegerStringKey(key: any): boolean;
}
declare module "ensureArrIndexStrKeyIsInt" {
    /**
     * Ensures that numeric integer string representations are turned into integers.
     * This function assumes that the key is either an array index number (integer), a string or a symbol.
     */
    export function ensureArrIndexStrKeyIsInt(key: any): any;
}
declare module "Entry" {
    export class Entry extends Array<any> {
        static fromArray(arr: any): any;
        constructor(key: any, value: any);
        0: any;
        1: any;
    }
}
declare module "isArguments" {
    /**
     * Determine whether a value is an Arguments object
     * @param {*} value
     * @returns {boolean}
     */
    export function isArguments(value: any): boolean;
}
declare module "isArray" {
    /**
     * Determine wheter the argument is an array
     * @param {*} value
     * @returns {boolean}
     */
    export const isArray: <T>(arg: {} | T) => arg is T extends readonly any[] ? unknown extends T ? never : readonly any[] : any[];
    export default isArray;
}
declare module "isArrayLike" {
    export { isArrayLike };
}
declare module "isBigint" {
    /**
     * Determine wheter the argument is a (typeof) bigint
     * @param {*} value
     * @returns {boolean}
     */
    export function isBigint(value: any): boolean;
    export default isBigint;
}
declare module "isBoolean" {
    /**
     * @method isBoolean
     * Determine wheter the argument is a Boolean
     * @param {*} value
     * @returns {boolean}
     * @tag util is core bemoje
     */
    export function isBoolean(value: any): boolean;
    export default isBoolean;
}
declare module "isBuffer" {
    /**
     * Determine whether a value is a Buffer
     * @param {*} value
     * @returns {boolean}
     */
    export function isBuffer(value: any): boolean;
    export default isBuffer;
}
declare module "nativeClasses" {
    export const nativeClasses: Set<any>;
    export default nativeClasses;
}
declare module "isClass" {
    /**
     * Determine whether a value is a class constructor function
     * @param {*} value
     * @returns {boolean}
     */
    export function isClass(value: any): boolean;
}
declare module "tsTag" {
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
    export function tsTag(object: any, className?: boolean): string;
    export namespace tsTag {
        export { tsTag };
        export { tagToClassName };
        export { classNameToTag };
        export { classToTag };
        export { is };
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
    export function tagToClassName(tag: string): string;
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
    export function classNameToTag(className: string): string;
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
    export function classToTag(klass: Function): string;
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
    export function is(type: string | Function, value?: any): Function | boolean;
    export default tsTag;
}
declare module "isDate" {
    /**
     * Determine wheter the argument is a Date
     * @param {*} value
     * @returns {boolean}
     */
    export function isDate(value: any): boolean;
    export default isDate;
}
declare module "isError" {
    /**
     * Determine wheter the argument is a Error
     * @param {*} value
     * @returns {boolean}
     */
    export function isError(value: any): boolean;
    export default isError;
}
declare module "isGeneratorFunction" {
    export const isGeneratorFunction: boolean | Function;
    export default isGeneratorFunction;
}
declare module "isGeneratorObject" {
    /**
     * Determine wheter a value is the iterable object returned from an invoked GeneratorFunction
     * @param {*} value
     * @returns {boolean}
     */
    export function isGeneratorObject(value: any): boolean;
    export default isGeneratorObject;
}
declare module "isIntegerString" {
    export function isIntegerString(str: any): boolean;
}
declare module "isIterable" {
    /**
     * Determine wheter the argument is an array
     * @param {*} value
     * @returns {boolean}
     *
     * fork of https://github.com/hemanth/is-iterable
     */
    export function isIterable(v: any): boolean;
    export default isIterable;
}
declare module "isKey" {
    /**
     * Determine whether a value could be a property key, ie. it being either a string or symbol
     * @param {*} value
     * @returns {boolean}
     */
    export function isKey(value: any): boolean;
    export default isKey;
}
declare module "isNull" {
    /**
     * Determine wheter the argument is a Null
     * @param {*} value
     * @returns {boolean}
     */
    export function isNull(value: any): boolean;
    export default isNull;
}
declare module "isNullOrUndefined" {
    /**
     * @method isNullOrUndefined
     * Determine wheter the argument is a NullOrUndefined
     * @param {*} value
     * @returns {boolean}
     * @tag util is core bemoje
     */
    export function isNullOrUndefined(value: any): boolean;
    export default isNullOrUndefined;
}
declare module "isNumber" {
    /**
     * Determine wheter the argument is a Number
     * @param {*} value
     * @returns {boolean}
     */
    export function isNumber(value: any): boolean;
    export default isNumber;
}
declare module "isPlainObject" {
    export { isPlainObject };
    export default isPlainObject;
}
declare module "isRegExp" {
    /**
     * Determine wheter the argument is a RegExp
     * @param {*} value
     * @returns {boolean}
     */
    export function isRegExp(value: any): boolean;
    export default isRegExp;
}
declare module "isTypedArray" {
    /**
     * Determine if a value is a TypedArray
     * @param {*} value
     * @returns {boolean}
     */
    export function isTypedArray(value: any): boolean;
    export default isTypedArray;
}
declare module "isValidLength" {
    /**
     * Determine if a value is applicable as a length for array-like collections.
     * @param {*} v - the value
     * @returns {boolean}
     */
    export function isValidLength(v: any): boolean;
    export default isValidLength;
}
declare module "isWindow" {
    /**
     * Determine wheter the argument is a browser's global object, 'window'
     * @param {*} value
     * @returns {boolean}
     */
    export function isWindow(v: any): boolean;
    export default isWindow;
}
declare module "KeyObjectifier" {
    export class KeyObjectifier {
        /**
         * Symbol, index and string keys are hashed and
         * @param {string|number|symbol} key - The key to objectify
         */
        objectify(key: string | number | symbol): any;
    }
}
declare module "Memory" {
    export class Bytes extends Number {
        constructor(bytes: any);
        get KB(): any;
        get MB(): number;
        get GB(): number;
        get TB(): number;
    }
    export class Memory {
        static get total(): Bytes;
        static get free(): Bytes;
        static get using(): Bytes;
    }
}
declare module "ProcessPriority" {
    /**
     * Easily set process priority. Based on the node native 'os' module.
     *
     * @example
     * const instance = new ProcessPriority(process.pid)
     *
     * instance
     * //=> ProcessPriority { pid: 16328, code: 0, label: 'NORMAL' }
     *
     * instance.HIGH()
     * //=> ProcessPriority { pid: 16328, code: -14, label: 'HIGH' }
     *
     * ProcessPriority.constants
     *  // [Object: null prototype] {
     *  //   PRIORITY_LOW: 19,
     *  //   PRIORITY_BELOW_NORMAL: 10,
     *  //   PRIORITY_NORMAL: 0,
     *  //   PRIORITY_ABOVE_NORMAL: -7,
     *  //   PRIORITY_HIGH: -14,
     *  //   PRIORITY_HIGHEST: -20
     *  // }
     *
     *  ProcessPriority.labelToCode('LOW')
     *  //=> 19
     *  ProcessPriority.labelToCode('BELOW_NORMAL')
     *  //=> 10
     *  ProcessPriority.labelToCode('NORMAL')
     *  //=> 0
     *  ProcessPriority.labelToCode('ABOVE_NORMAL')
     *  //=> -7
     *  ProcessPriority.labelToCode('HIGH')
     *  //=> -14
     *  ProcessPriority.labelToCode('HIGHEST')
     *  //=> -22
     *
     *  ProcessPriority.codeToLabel(19)
     *  //=> LOW
     *  ProcessPriority.codeToLabel(10)
     *  //=> BELOW_NORMAL
     *  ProcessPriority.codeToLabel(0)
     *  //=> NORMAL
     *  ProcessPriority.codeToLabel(-7)
     *  //=> ABOVE_NORMAL
     *  ProcessPriority.codeToLabel(-14)
     *  //=> HIGH
     *  ProcessPriority.codeToLabel(-22)
     *  //=> HIGHEST
     */
    export class ProcessPriority {
        /**
         * @property {object} constants - map of used constants integer codes and string labels
         */
        static constants: any;
        /**
         * Returns the label that matches the code integer.
         * @param {number} code
         * @returns {string}
         */
        static codeToLabel(code: number): string;
        /**
         * Returns the integer code that matches a given label.
         * @param {string} label
         * @returns {string}
         */
        static labelToCode(label: string): string;
        /**
         * @param {number} [pid=process.pid] - process id (integer)
         */
        constructor(pid?: number);
        /**
         * @property {number} pid - An integer identifier for the process id.
         */
        pid: number;
        /**
         * @property {number} code - An integer identifier for the process priority.
         */
        code: any;
        /**
         * @property {number} label - labels the process priority.
         */
        label: any;
        /**
         * Refreshes the code and label properties on the object by pulling the latest info about the process from the running operating system.
         * @returns {ProcessPriority} this
         */
        refresh(): ProcessPriority;
        /**
         * Sets the process' priority to LOW
         * @param {number} pid - process id
         * @returns {ProcessPriority} this
         */
        LOW(): ProcessPriority;
        /**
         * Sets the process' priority to BELOW_NORMAL
         * @param {number} pid - process id
         * @returns {ProcessPriority} this
         */
        BELOW_NORMAL(): ProcessPriority;
        /**
         * Sets the process' priority to NORMAL
         * @param {number} pid - process id
         * @returns {ProcessPriority} this
         */
        NORMAL(): ProcessPriority;
        /**
         * Sets the process' priority to ABOVE_NORMAL
         * @param {number} pid - process id
         * @returns {ProcessPriority} this
         */
        ABOVE_NORMAL(): ProcessPriority;
        /**
         * Sets the process' priority to HIGH
         * @param {number} pid - process id
         * @returns {ProcessPriority} this
         */
        HIGH(): ProcessPriority;
        /**
         * Sets the process' priority to HIGHEST
         * @param {number} pid - process id
         * @returns {ProcessPriority} this
         */
        HIGHEST(): ProcessPriority;
    }
}
declare module "strByteSize" {
    export function strByteSize(str: any): number;
}
declare module "superOf" {
    /**
     * Returns the super class constructor of an object
     * @returns {Function}
     *
     * @example
     * class Wow {}
     * superOf(Wow.prototype)
     * //=> Object
     * superOf(new Wow())
     * //=> Object
     *
     * class Cool extends Wow {}
     * superOf(Cool.prototype)
     * //=> Wow
     * superOf(new Cool())
     * //=> Wow
     *
     * superOf(Object.prototype)
     * //=> null
     *
     * superOf('string')
     * //=> Object
     * superOf(true)
     * //=> Object
     * superOf((123))
     * //=> Object
     *
     * superOf(Function.prototype)
     * //=> Object
     *
     * superOf(Array.prototype)
     * //=> Object
     * superOf([2])
     * //=> Object
     *
     * @example
     * class Wow {}
     * superOf(Wow)
     * //=> Object
     *
     * class Cool extends Wow {}
     * superOf(Cool)
     * //=> Wow
     *
     * superOf(Object)
     * //=> null
     *
     * superOf(Function)
     * //=> Object
     * superOf((function () {}))
     * //=> Object
     * superOf((function* () {}))
     * //=> Object
     * superOf((() => {}))
     * //=> Object
     *
     * superOf(Array)
     * //=> Object
     */
    export function superOf(target: any): Function;
}
declare module "transferProperties" {
    /**
     * @returns {void}
     */
    export function transferProperties(target: any, source: any, filter: any): void;
}
declare module "XtObject" {
    export class XtObject {
    }
}
declare module "index" {
    export { api } from "./api";
    export { arrSwap } from "./arrSwap";
    export { assertKeyAvailable } from "./assertKeyAvailable";
    export { assertUpperCase } from "./assertUpperCase";
    export { autoPackage } from "./autoPackage";
    export { Class } from "./Class";
    export { classOf } from "./classOf";
    export { color } from "./color";
    export { CommonBase } from "./CommonBase";
    export { createProperty } from "./createProperty";
    export { DefaultMap } from "./DefaultMap";
    export { DefaultWeakMap } from "./DefaultWeakMap";
    export { defineAlias } from "./defineAlias";
    export { defineGetter } from "./defineGetter";
    export { defineLazyValue } from "./defineLazyValue";
    export { defineLoyalValue } from "./defineLoyalValue";
    export { defineMethod } from "./defineMethod";
    export { defineProperty } from "./defineProperty";
    export { defineSetter } from "./defineSetter";
    export { defineValue } from "./defineValue";
    export { DIRPATH } from "./DIRPATH";
    export { ensureArrIndexStrKeyIsInt } from "./ensureArrIndexStrKeyIsInt";
    export { Entry } from "./Entry";
    export { ExtensibleFunction } from "./ExtensibleFunction";
    export { GLOBAL } from "./GLOBAL";
    export { globalSymbolicKeyspace } from "./globalSymbolicKeyspace";
    export { isArguments } from "./isArguments";
    export { isArray } from "./isArray";
    export { isArrayLike } from "./isArrayLike";
    export { isBigint } from "./isBigint";
    export { isBoolean } from "./isBoolean";
    export { isBuffer } from "./isBuffer";
    export { isCharCodeDash } from "./isCharCodeDash";
    export { isCharCodeDigit } from "./isCharCodeDigit";
    export { isCharCodeZero } from "./isCharCodeZero";
    export { isClass } from "./isClass";
    export { isConstructor } from "./isConstructor";
    export { isDate } from "./isDate";
    export { isDefined } from "./isDefined";
    export { isError } from "./isError";
    export { isFunction } from "./isFunction";
    export { isGeneratorFunction } from "./isGeneratorFunction";
    export { isGeneratorObject } from "./isGeneratorObject";
    export { isIntegerString } from "./isIntegerString";
    export { isIntegerStringKey } from "./isIntegerStringKey";
    export { isIterable } from "./isIterable";
    export { isKey } from "./isKey";
    export { isNull } from "./isNull";
    export { isNullOrUndefined } from "./isNullOrUndefined";
    export { isNumber } from "./isNumber";
    export { isObject } from "./isObject";
    export { isPlainObject } from "./isPlainObject";
    export { isPrimitive } from "./isPrimitive";
    export { isPrototype } from "./isPrototype";
    export { isRegExp } from "./isRegExp";
    export { isString } from "./isString";
    export { isSymbol } from "./isSymbol";
    export { isTypedArray } from "./isTypedArray";
    export { isUndefined } from "./isUndefined";
    export { isValidLength } from "./isValidLength";
    export { isWindow } from "./isWindow";
    export { KeyObjectifier } from "./KeyObjectifier";
    export { Memory } from "./Memory";
    export { Method } from "./Method";
    export { nameFunction } from "./nameFunction";
    export { nativeClasses } from "./nativeClasses";
    export { paramNames } from "./paramNames";
    export { ProcessPriority } from "./ProcessPriority";
    export { randomIntBetween } from "./randomIntBetween";
    export { sourceRefactorArrowFunctionToNamedFunction } from "./sourceRefactorArrowFunctionToNamedFunction";
    export { strByteSize } from "./strByteSize";
    export { superChain } from "./superChain";
    export { superChainFromRoot } from "./superChainFromRoot";
    export { superOf } from "./superOf";
    export { SymbolicKeyspace } from "./SymbolicKeyspace";
    export { transferProperties } from "./transferProperties";
    export { transferProperty } from "./transferProperty";
    export { tsTag } from "./tsTag";
    export { XtFunction } from "./XtFunction";
    export { XtObject } from "./XtObject";
}
