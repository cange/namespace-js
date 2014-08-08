# namespace-js [![Build Status](https://travis-ci.org/cange/namespace-js.svg?branch=1.0.1)](https://travis-ci.org/cange/namespace-js) [![Bower version](https://badge.fury.io/bo/namespace-js.svg)](http://badge.fury.io/bo/namespace-js) [![Dependency Status](https://david-dm.org/cange/namespace-js.svg?theme=shields.io)](https://david-dm.org/cange/namespace-js)

Namespace-js is a lightweight JavaScript helper checking for or creating namespace objects.
Is compatible with all new and old browsers like IE6.

## Usage

You can create a object chain with

```javascript
Namespace.create('be.awesome');
be.awesome.Magic = function () {
  // your magic code
};
```

Check if a namespace exists

```javascript
Namespace.is('be.awesome');
```

Check if namespace on a local object exists

```javascript
var localObj = { be: { awesome: 'bam' } };
Namespace.is(localObj, 'be.awesome');
```
