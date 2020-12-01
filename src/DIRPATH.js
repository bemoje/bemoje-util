import path from 'path'
import { data, desktop, home, tmp } from 'ospath'

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
	static DATA(...paths) {
		return path.join(data(), ...paths)
	}

	/**
	 * Get the running environment operating system's logged in user's desktop path.
	 * @param {...string} [paths=[]] - additional path names may be added and they will be joined into the returned path string.
	 * @returns {string}
	 * @example
	 * DIRPATH.DESKTOP('some', 'dir', 'file.js')
	 * //=> 'C:/Users/User/Desktop/some/dir/file.js',
	 */

	static DESKTOP(...paths) {
		return path.join(desktop(), ...paths)
	}

	/**
	 * Get the running environment operating system's logged in user's home path.
	 * @param {...string} [paths=[]] - additional path names may be added and they will be joined into the returned path string.
	 * @returns {string}
	 * @example
	 * DIRPATH.HOME('some', 'dir', 'file.js')
	 * //=> 'C:/Users/User/some/dir/file.js',
	 */
	static HOME(...paths) {
		return path.join(home(), ...paths)
	}

	/**
	 * Get the running environment operating system's logged in user's path for temporary files.
	 * @param {...string} [paths=[]] - additional path names may be added and they will be joined into the returned path string.
	 * @returns {string}
	 * @example
	 * DIRPATH.TEMP('some', 'dir', 'file.js')
	 * //=> 'C:/Users/User/AppData/Local/Temp/some/dir/file.js',
	 */
	static TEMP(...paths) {
		return path.join(tmp(), ...paths)
	}

	/**
	 * Get the current working directory of the current process.
	 * @param {...string} [paths=[]] - additional path names may be added and they will be joined into the returned path string.
	 * @returns {string}
	 * @example
	 * DIRPATH.CWD('some', 'dir', 'file.js')
	 * //=> 'C:/WINDOWS/system32/some/dir/file.js'
	 */
	static CWD(...paths) {
		return path.join(process.cwd(), ...paths)
	}
}
