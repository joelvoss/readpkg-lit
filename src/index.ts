import path from 'node:path';
import { findUp, findUpSync } from 'findup-lit';
import { readPackage, readPackageSync } from './read-pkg';

////////////////////////////////////////////////////////////////////////////////

type Options = {
	cwd?: string;
	normalize?: boolean;
};

/**
 * readPackageUp finds and reads a package.json file.
 */
export async function readPackageUp(options?: Options) {
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
 * readPackageUpSync finds and reads a package.json file synchronously.
 */
export function readPackageUpSync(options?: Options) {
	const filePath = findUpSync('package.json', options);
	if (!filePath) return;

	return {
		packageJson: readPackageSync({ ...options, cwd: path.dirname(filePath) }),
		path: filePath,
	};
}
