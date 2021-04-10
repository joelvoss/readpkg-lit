# readpkg-lit

This package finds and parses the closes `package.json`.

## Requirements

- Node v12+

## Installation

```bash
$ npm i readpkg-lit
# or
$ yarn add readpkg-lit
```

## Usage

```js
import { readPackageUp } from 'readpkg-lit';

console.log(await readPackageUp());
// -> { packageJson: { name: '<package-name>', ... }, path: 'path/to/package.json' }
```

## API

### `readPackageUp(options?)` / `readPackageUpSync(options?)`

Returns a `Promise<object|undefined>` depending if a `package.json` file was
found.

> In sync mode, returns `object` or `undefined` without a promise.

#### `options`

Type: `object`

##### `cwd`

Type: `string`  
Default: `process.cwd()`

Current working directory to start traversing the file tree up until a
`package.json` was found.

##### `normalize`

Type: `boolean`  
Default: `true`

Normalize the `package.json` data using [normalize-package-data].

## Development

(1) Install dependencies

```bash
$ npm i
# or
$ yarn
```

(2) Run initial validation

```bash
$ ./Taskfile.sh validate
```

(3) Start developing. See [`./Taskfile.sh`](./Taskfile.sh) for more tasks to
help you develop.

---

_This project was set up by @jvdx/core_

[normalize-package-data]: https://github.com/npm/normalize-package-data#what-normalization-currently-entails
