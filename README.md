# namespace-js
[![Build Status](https://travis-ci.org/cange/namespace-js.svg?branch=master)](https://travis-ci.org/cange/namespace-js) [![npm version](https://badge.fury.io/js/js-namespace.svg)](https://badge.fury.io/js/js-namespace) [![Bower version](https://badge.fury.io/bo/namespace-js.svg)](http://badge.fury.io/bo/namespace-js)

Namespace-js is a lightweight JavaScript helper checking for or creating namespace objects.

## Install

```shell
npm install js-namespace --save
```

## Usage

You can create a object chain with

```javascript
Namespace.create('be.awesome'); // => be: Object { awesome: Object }

// or direct assignment

Namespace.create('be.awesome').Magic = function() {
  // your magic code
}; // => function be.awesome.Magic()
```

Check if a namespace exists

```javascript
Namespace.is('be.awesome'); // => false
Namespace.create('be.awesome');
Namespace.is('be.awesome'); // => true
```

Check if namespace on a local object exists

```javascript
var localObj = {
  be: {
    awesome: 'bam'
  }
};

if (Namespace.is(localObj, 'be.awesome')) {
  Namespace.create('be.awesome');
}
```

## Licensing

MIT
