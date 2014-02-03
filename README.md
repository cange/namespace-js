# namespace-js

<a href="http://travis-ci.org/cange/namespace-js">
  <img alt="Build Status" src="https://secure.travis-ci.org/cange/namespace-js.png?branch=master"/>
</a>

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
