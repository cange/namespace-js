'use strict';

describe('namespace-js', function() {

  afterEach(function() {
    delete window.testNS;
  });

  it('should be possible to create a simple namespace object paths', function() {
    Namespace.create('testNS');
    expect(typeof window.testNS).toEqual('object');
  });

  it('should be possible to create a nested namespace object paths', function() {
    Namespace.create('testNS.foo.bar');
    expect(typeof window.testNS.foo.bar).toEqual('object');
  });

  it('should not possible to overwrite an existing object path', function() {
    Namespace.create('testNS');
    expect(window.testNS.foo).toEqual(undefined);
    window.testNS.foo = 'bar';
    expect(window.testNS.foo).toEqual('bar');
    Namespace.create('testNS.foo');
    expect(window.testNS.foo).toEqual('bar');
  });

  it('should be possible to check on existing namespace object paths', function() {
    expect(Namespace.is('testNS')).toBeFalsy();
    Namespace.create('testNS');
    expect(Namespace.is('testNS')).toBeTruthy();

    expect(Namespace.is('testNS.foo')).toBeFalsy();
    Namespace.create('testNS.foo.bar');
    expect(Namespace.is('testNS.foo.bar')).toBeTruthy();
  });

});
