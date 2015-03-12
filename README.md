# purge-array

[![NPM version][npm-img]][npm-url]
[![License][license-img]][license-url]
[![Build status][travis-img]][travis-url]

Aggressively remove empty values from an array.

## Installation

```
npm install purge-array
```

## Usage

``` javascript
var purgeArray = require('purge-array')

var arr = [null, undefined, [], {}, '', true, false, 1, 0, 'string']

purgeArray(arr)
// => [true, 1, 'string']
```

[npm-img]: https://img.shields.io/npm/v/purge-array.svg?style=flat-square
[npm-url]: https://npmjs.org/package/purge-array
[license-img]: http://img.shields.io/npm/l/purge-array.svg?style=flat-square
[license-url]: LICENSE
[travis-img]: https://img.shields.io/travis/gummesson/purge-array.svg?style=flat-square
[travis-url]: https://travis-ci.org/gummesson/purge-array
