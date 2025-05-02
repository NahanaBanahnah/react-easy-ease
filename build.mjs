/** ====== REACT-EASY-EASE =====
 * Easing functions for use in CSS / React
 */

import { build } from 'tsup'

import fs from 'fs/promises'
import _ from 'lodash'
import { curves } from './curves.js'

/** PREBUILD SCRIPT
 * Populates ts and css files to be bundled
 */
export const buildScript = async () => {
	/** Empty array for full file */
	let jsFullArray = []
	let cssFullArray = []

	for (const item of curves) {
		/** Loop each preset
		 *  creates JS export as well as CSS variable
		 */
		for (const preset of item.presets) {
			/** convert to camel case */
			let constName = `${item.prefix}_${_.upperFirst(
				_.camelCase(preset.name)
			)}`

			/** convert to correct syntax  */
			let js = `export const ${constName} = [${preset.curve}]`
			let css = `--${constName}: cubic-bezier(${preset.curve})`

			/** store */
			jsFullArray.push(js)
			cssFullArray.push(css)

			let obj = {
				resolve: true,
				entry: `./src/${item.file}.ts}`,
			}
		}
	}
	/** write master file containing all values */
	await fs.writeFile(`./src/index.ts`, jsFullArray.join('\r'))
	await fs.writeFile(
		`./src/index.css`,
		`:root { \r${cssFullArray.join(';\r')}\r}`
	)
}

// /** REMOVE CURRENT DIST AND BUILD FILES */
await fs.rm('./dist', { recursive: true, force: true })
await buildScript()

/** TSUP PACKAGE */
await build({
	platform: 'node',
	target: 'node16',
	entry: ['src'],
	format: ['cjs', 'esm'],
	clean: true,
	minify: true,
	dts: {
		resolve: true,
		entry: './src/index.ts',
	},
})
