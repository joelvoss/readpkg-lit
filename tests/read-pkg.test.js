import path from 'path';
import fixtures from 'fixturez';

////////////////////////////////////////////////////////////////////////////////

const cwd = __dirname;
const f = fixtures(cwd);

////////////////////////////////////////////////////////////////////////////////

describe(`readPackage`, () => {
	const { readPackage } = require('../src/read-pkg');
	let fixturePath = f.find('read-pkg');

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
	const { readPackageSync } = require('../src/read-pkg');
	let fixturePath = f.find('read-pkg');

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
