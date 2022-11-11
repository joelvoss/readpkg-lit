import path from 'path';
import { findUp, findUpSync } from 'findup-lit';
import { readPackage, readPackageSync } from './read-pkg';

////////////////////////////////////////////////////////////////////////////////

/**
 * @typedef {Object} Options
 * @prop {string} [cwd]
 * @prop {boolean} [normalize]
 */

/**
 * readPackageUp
 * @param {Options} [options]
 * @returns {Promise<{ packageJson: Object, path: string }>}
 */
export async function readPackageUp(options) {
	const filePath = await findUp('package.json', options);
	if (!filePath) return;

	return {
		packageJson: await readPackage({
			...options,
			cwd: path.dirname(filePath),
		}),
		path: filePath,
	};
}

////////////////////////////////////////////////////////////////////////////////

/**
 * readPackageUpSync
 * @param {Options} [options]
 * @returns {{ packageJson: Object, path: string }}
 */
export function readPackageUpSync(options) {
	const filePath = findUpSync('package.json', options);
	if (!filePath) return;

	return {
		packageJson: readPackageSync({ ...options, cwd: path.dirname(filePath) }),
		path: filePath,
	};
}
