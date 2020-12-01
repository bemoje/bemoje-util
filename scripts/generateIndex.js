import fs from 'fs-extra'
import path from 'path'

const REGEX_IGNORE = /(\.(spec|test|examples?|bench)\.js$)|index\.js/i
const REGEX_DASH = /-/

const lines = fs
	.readdirSync('./src')
	.filter((filename) => {
		return !REGEX_IGNORE.test(filename)
	})
	.map((filename) => {
		let name
		const isClass = filename.charAt(0) == filename.charAt(0).toUpperCase()
		if (REGEX_DASH.test(filename)) {
			const oldFileName = filename
			filename = filename
				.split('-')
				.map((str, i) => {
					if (i === 0 && !isClass) {
						return str
					} else {
						return str.charAt(0).toUpperCase() + str.substring(1)
					}
				})
				.join('')

			fs.renameSync(
				path.join(process.cwd(), 'src', oldFileName),
				path.join(process.cwd(), 'src', filename)
			)
		}
		if (/\.js$/i.test(filename)) {
			name = filename.replace(/\.js$/i, '')
			return `export { ${name} } from './${name}'`
		} else {
			name = filename
			return `export * from './${filename}'`
		}
	})

fs.writeFileSync('./src/index.js', lines.join('\n'))

require(path.join(process.cwd(), 'src', 'index.js'))
