'use strict';

describe('Namespace', function() {

  afterEach(function() {
    delete window.testNS;
  });

  describe('create()', function() {

    it('should be possible to create a simple namespace object paths', function() {
      Namespace.create('testNS');
      expect(typeof window.testNS).toEqual('object');
    });

    it('should be possible to create a nested namespace object paths', function() {
      Namespace.create('testNS.be.awesome');
      expect(typeof window.testNS.be.awesome).toEqual('object');
    });

    it('should not possible to overwrite an existing object path', function() {
      Namespace.create('testNS');
      expect(window.testNS.be).toEqual(undefined);
      window.testNS.be = 'awesome';
      expect(window.testNS.be).toEqual('awesome');
      Namespace.create('testNS.be');
      expect(window.testNS.be).toEqual('awesome');
    });

  });

  describe('is()', function() {

    describe('for a global Object', function() {

      it('check the path on an global object', function() {
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

      it('check of an existing path on an local object', function() {
        expect(Namespace.is(localObj, 'be.awesome')).toBeTruthy();
      });

      it('check of and not existing path on an local object', function() {
        expect(Namespace.is(localObj, 'be.sad')).toBeFalsy();
      });

    });

  });

});
