'use strict';

describe('Namespace', function() {

  var actual;

  afterEach(function() {
    delete window.testNS;
  });

  describe('create()', function() {

    it('should be possible to create a simple namespace object chains', function() {
      Namespace.create('testNS');
      expect(typeof window.testNS).toEqual('object');
    });

    it('should be possible to create a nested namespace object chains', function() {
      Namespace.create('testNS.be.awesome');
      expect(typeof window.testNS.be.awesome).toEqual('object');
    });

    it('should not possible to overwrite an existing object chain', function() {
      Namespace.create('testNS');
      expect(window.testNS.be).toEqual(undefined);
      window.testNS.be = 'awesome';
      expect(window.testNS.be).toEqual('awesome');
      Namespace.create('testNS.be');
      expect(window.testNS.be).toEqual('awesome');
    });

    it('returns the given namespace string as an object', function () {
      actual = Namespace.create('testNS.foo');
      expect(window.testNS.foo).toEqual(actual);
    });

    it('should be possible to add objects on the created namespace', function () {
      Namespace.create('testNS').foo = function (param) {
        return param;
      };
      actual = window.testNS.foo('bar');
      expect('bar').toEqual(actual);
    });

  });

  describe('is()', function() {

    describe('for a global Object', function() {

      it('check the chain on an global object', function() {
        expect(Namespace.is('testNS')).toBeFalsy();
        Namespace.create('testNS');
        expect(Namespace.is('testNS')).toBeTruthy();

        expect(Namespace.is('testNS.be')).toBeFalsy();
        Namespace.create('testNS.be.awesome');
        expect(Namespace.is('testNS.be.awesome')).toBeTruthy();
      });

    });

    describe('for a local Object', function() {

      var localObj;
      beforeEach(function() {
        localObj = { be: { awesome: 'bam' } };
      });

      it('check of an existing chain on an local object', function() {
        actual = Namespace.is(localObj, 'be.awesome');
        expect(actual).toBeTruthy();
      });

      it('check of and not existing chain on an local object', function() {
        actual = Namespace.is(localObj, 'be.sad');
        expect(actual).toBeFalsy();
      });

    });

  });

});
