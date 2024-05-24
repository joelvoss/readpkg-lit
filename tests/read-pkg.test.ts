import { describe, beforeEach, afterEach, test, expect } from 'vitest';
import path from 'node:path';
import { readPackage, readPackageSync } from '../src/read-pkg';

////////////////////////////////////////////////////////////////////////////////

const cwd = __dirname;
const fixtures = path.resolve(__dirname, 'fixtures');

////////////////////////////////////////////////////////////////////////////////

describe(`readPackage`, () => {
	const fixturePath = path.join(fixtures, 'read-pkg');

	beforeEach(() => {
		process.chdir(fixturePath);
	});

	afterEach(() => {
		process.chdir(cwd);
	});

	test('async', async () => {
		const pkg = await readPackage();
		expect(pkg.name).toEqual('test-pkg');
		expect(pkg._id).toBeTruthy();
	});

	test('async (custom cwd)', async () => {
		const pkg = await readPackage({ cwd: path.join(cwd, '..') });
		expect(pkg.name).toEqual('readpkg-lit');
	});
});

////////////////////////////////////////////////////////////////////////////////

describe(`readPackageSync`, () => {
	const fixturePath = path.join(fixtures, 'read-pkg');

	beforeEach(() => {
		process.chdir(fixturePath);
	});

	afterEach(() => {
		process.chdir(cwd);
	});

	test('sync', () => {
		const pkg = readPackageSync();
		expect(pkg.name).toEqual('test-pkg');
		expect(pkg._id).toBeTruthy();
	});

	test('sync (custom cwd)', () => {
		const pkg = readPackageSync({ cwd: path.join(cwd, '..') });
		expect(pkg.name).toEqual('readpkg-lit');
	});
});
