import path from 'path';
import fixtures from 'fixturez';

////////////////////////////////////////////////////////////////////////////////

const cwd = __dirname;
const rootPath = path.join(cwd, '..');
const f = fixtures(cwd);

////////////////////////////////////////////////////////////////////////////////

describe(`readPackageUp`, () => {
	const { readPackageUp } = require('../src/index');
	const pkgPath = f.find('read-pkg-up');
	const fixturePath = path.join(pkgPath, 'nested/folder');

	beforeEach(() => {
		process.chdir(fixturePath);
	});

	afterEach(() => {
		process.chdir(cwd);
	});

	test('async', async () => {
		const r = await readPackageUp();
		expect(r.packageJson.name).toEqual('test-pkg-2');
		expect(r.path).toEqual(`${pkgPath}/package.json`);
	});
	
	test('async (custom cwd)', async () => {
		const r = await readPackageUp({ cwd });
		expect(r.packageJson.name).toEqual('readpkg-lit');
		expect(r.path).toEqual(`${rootPath}/package.json`);
	});
});

////////////////////////////////////////////////////////////////////////////////

describe(`readPackageUpSync`, () => {
	const { readPackageUpSync } = require('../src/index');
	const pkgPath = f.find('read-pkg-up');
	const fixturePath = path.join(pkgPath, 'nested/folder');

	beforeEach(() => {
		process.chdir(fixturePath);
	});

	afterEach(() => {
		process.chdir(cwd);
	});

	test('async', () => {
		const r = readPackageUpSync();
		expect(r.packageJson.name).toEqual('test-pkg-2');
		expect(r.path).toEqual(`${pkgPath}/package.json`);
	});
	
	test('async (custom cwd)', () => {
		const r = readPackageUpSync({ cwd });
		expect(r.packageJson.name).toEqual('readpkg-lit');
		expect(r.path).toEqual(`${rootPath}/package.json`);
	});
});