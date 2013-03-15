'use strict';

module('Namespace.js', {
  teardown: function () {
    delete window.testNS;
  }
});

test('should be possible to create a simple namespace object paths', function () {
  equal(window.testNS, undefined);

  Namespace.create('testNS');
  ok(window.testNS);
  equal(typeof window.testNS, 'object');
});

test('should be possible to create a nested namespace object paths', function () {
  equal(window.testNS, undefined);

  Namespace.create('testNS.foo.bar');
  ok(window.testNS.foo.bar);
  equal(typeof window.testNS.foo.bar, 'object');
});

test('should not possible to overwrite an existing object path', function () {
  Namespace.create('testNS');
  equal(window.testNS.foo, undefined);
  window.testNS.foo = 'bar';
  equal(window.testNS.foo, 'bar');
  Namespace.create('testNS.foo');
  equal(window.testNS.foo, 'bar');
});

test('should be possible to check on existing namespace object paths', function () {
  equal(window.testNS, undefined);
  equal(Namespace.is('testNS'), false);

  Namespace.create('testNS');
  equal(Namespace.is('testNS'), true);
  equal(Namespace.is('testNS.foo'), false);

  Namespace.create('testNS.foo.bar');
  equal(Namespace.is('testNS.foo'), true);
});

