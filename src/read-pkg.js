import fs, { promises as fsAsync } from 'fs';
import path from 'path';
import normalizePackageData from 'normalize-package-data';

export async function readPackage({
	cwd = process.cwd(),
	normalize = true,
} = {}) {
	const filePath = path.resolve(cwd, 'package.json');
	const jsonStr = await fsAsync.readFile(filePath, 'utf8');
	const json = JSON.parse(jsonStr);

	if (normalize) {
		normalizePackageData(json);
	}

	return json;
}

////////////////////////////////////////////////////////////////////////////////

export function readPackageSync({
	cwd = process.cwd(),
	normalize = true,
} = {}) {
	const filePath = path.resolve(cwd, 'package.json');
	const jsonStr = fs.readFileSync(filePath, 'utf8');
	const json = JSON.parse(jsonStr);

	if (normalize) {
		normalizePackageData(json);
	}

	return json;
}
