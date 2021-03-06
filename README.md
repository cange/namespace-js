# namespace-js
[![Build Status](https://travis-ci.org/cange/namespace-js.svg?branch=master)](https://travis-ci.org/cange/namespace-js) [![npm version](https://badge.fury.io/js/js-namespace.svg)](https://badge.fury.io/js/js-namespace)

Namespace-js is a lightweight JavaScript helper checking for or creating namespace objects.

## Install
```shell
npm install js-namespace --save
```

## Usage
You can create an object chain with

```javascript
import Namespace from 'js-namespace'
// or
// const Namespace = require('js-namespace')

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

## Deployment
A node module package will be published by setting a new version. (Make sure you are logged in via npm registry)
```shell
npm version <version> -m '%s – <reason>'
```

## Licensing
MIT
