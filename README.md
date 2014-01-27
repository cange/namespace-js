# namespace-js

Namespace-js is a lightweight JavaScript helper checking for or creating namespace objects.
Is compatible with all new and old browsers like IE6.

<a href="http://travis-ci.org/cange/namespace-js">
  <img alt="Build Status" src="https://secure.travis-ci.org/cange/namespace-js.png?branch=master"/>
</a>

## Usage

```javascript
Namespace.create('foo.bar');
foo.bar.Magic = function () {
  // your magic code
};
```
