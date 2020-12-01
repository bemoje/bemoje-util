import os from 'os'

const LOW = os.constants.priority.PRIORITY_LOW
const BELOW_NORMAL = os.constants.priority.PRIORITY_BELOW_NORMAL
const NORMAL = os.constants.priority.PRIORITY_NORMAL
const ABOVE_NORMAL = os.constants.priority.PRIORITY_ABOVE_NORMAL
const HIGH = os.constants.priority.PRIORITY_HIGH
const HIGHEST = os.constants.priority.PRIORITY_HIGHEST

const codeToLabelMap = new Map([
	[LOW, 'LOW'],
	[BELOW_NORMAL, 'BELOW_NORMAL'],
	[NORMAL, 'NORMAL'],
	[ABOVE_NORMAL, 'ABOVE_NORMAL'],
	[HIGH, 'HIGH'],
	[HIGHEST, 'HIGHEST'],
])

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
	 * @property {number} pid - An integer identifier for the process id.
	 */
	pid
	/**
	 * @property {number} code - An integer identifier for the process priority.
	 */
	code
	/**
	 * @property {number} label - labels the process priority.
	 */
	label

	/**
	 * @property {object} constants - map of used constants integer codes and string labels
	 */
	static constants = os.constants.priority

	/**
	 * Returns the label that matches the code integer.
	 * @param {number} code
	 * @returns {string}
	 */
	static codeToLabel(code) {
		return codeToLabelMap.get(code)
	}

	/**
	 * Returns the integer code that matches a given label.
	 * @param {string} label
	 * @returns {string}
	 */
	static labelToCode(label) {
		return os.constants.priority['PRIORITY_' + label.toUpperCase()]
	}

	/**
	 * @param {number} [pid=process.pid] - process id (integer)
	 */
	constructor(pid = process.pid) {
		this.pid = pid
		this.refresh()
	}

	/**
	 * Refreshes the code and label properties on the object by pulling the latest info about the process from the running operating system.
	 * @returns {ProcessPriority} this
	 */
	refresh() {
		this.code = os.getPriority(this.pid)
		this.label = ProcessPriority.codeToLabel(this.code)
		return this
	}

	/**
	 * Sets the process' priority to LOW
	 * @param {number} pid - process id
	 * @returns {ProcessPriority} this
	 */
	LOW() {
		os.setPriority(this.pid, LOW)
		return this.refresh()
	}

	/**
	 * Sets the process' priority to BELOW_NORMAL
	 * @param {number} pid - process id
	 * @returns {ProcessPriority} this
	 */
	BELOW_NORMAL() {
		os.setPriority(this.pid, BELOW_NORMAL)
		return this.refresh()
	}

	/**
	 * Sets the process' priority to NORMAL
	 * @param {number} pid - process id
	 * @returns {ProcessPriority} this
	 */
	NORMAL() {
		os.setPriority(this.pid, NORMAL)
		return this.refresh()
	}

	/**
	 * Sets the process' priority to ABOVE_NORMAL
	 * @param {number} pid - process id
	 * @returns {ProcessPriority} this
	 */
	ABOVE_NORMAL() {
		os.setPriority(this.pid, ABOVE_NORMAL)
		return this.refresh()
	}

	/**
	 * Sets the process' priority to HIGH
	 * @param {number} pid - process id
	 * @returns {ProcessPriority} this
	 */
	HIGH() {
		os.setPriority(this.pid, HIGH)
		return this.refresh()
	}

	/**
	 * Sets the process' priority to HIGHEST
	 * @param {number} pid - process id
	 * @returns {ProcessPriority} this
	 */
	HIGHEST() {
		os.setPriority(this.pid, HIGHEST)
		return this.refresh()
	}
}

/*
console.log(ProcessPriority.constants)

console.log(ProcessPriority.labelToCode('LOW'))
console.log(ProcessPriority.labelToCode('BELOW_NORMAL'))
console.log(ProcessPriority.labelToCode('NORMAL'))
console.log(ProcessPriority.labelToCode('ABOVE_NORMAL'))
console.log(ProcessPriority.labelToCode('HIGH'))
console.log(ProcessPriority.labelToCode('HIGHEST'))

console.log(ProcessPriority.codeToLabel(19))
console.log(ProcessPriority.codeToLabel(10))
console.log(ProcessPriority.codeToLabel(0))
console.log(ProcessPriority.codeToLabel(-7))
console.log(ProcessPriority.codeToLabel(-14))
console.log(ProcessPriority.codeToLabel(-22))

const instance = new ProcessPriority(process.pid)

console.log(instance)

console.log(instance.HIGH())
*/
