import fs from 'node:fs';
import fsAsync from 'node:fs/promises';
import path from 'node:path';
import normalizePackageData from 'normalize-package-data';

////////////////////////////////////////////////////////////////////////////////

type ReadOptions = {
	cwd?: string;
	normalize?: boolean;
};

/**
 * readPackage
 */
export async function readPackage(options: ReadOptions = {}) {
	const { cwd = process.cwd(), normalize = true } = options;
	const filePath = path.resolve(cwd, 'package.json');
	const jsonStr = await fsAsync.readFile(filePath, 'utf8');
	const json = JSON.parse(jsonStr);

	if (normalize) {
		normalizePackageData(json);
	}

	return json;
}

////////////////////////////////////////////////////////////////////////////////

/**
 * readPackageSync
 */
export function readPackageSync(options: ReadOptions = {}) {
	const { cwd = process.cwd(), normalize = true } = options;
	const filePath = path.resolve(cwd, 'package.json');
	const jsonStr = fs.readFileSync(filePath, 'utf8');
	const json = JSON.parse(jsonStr);

	if (normalize) {
		normalizePackageData(json);
	}

	return json;
}
