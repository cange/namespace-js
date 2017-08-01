var Namespace = require('./namespace')

'use strict'

describe('Namespace', function() {
  var received

  describe('create()', function() {
    describe('When single namespace is given', function () {
      beforeEach(function () {
        Namespace.create('testNS')
      })

      it('creates single object', function() {
        expect(typeof window.testNS).toEqual('object')
      })
    })

    describe('When nested namespace is given', function () {
      beforeEach(function () {
        Namespace.create('testNS.be.awesome')
      })

      it('creats deep object chains', function() {
        expect(typeof window.testNS.be.awesome).toEqual('object')
      })
    })

    describe('When namespace already given', function () {
      beforeEach(function () {
        window.foo = { oldNamespace: 'awesome' }

        Namespace.create('foo.newNamespace')
      })

      it('do not overwrite', function() {
        expect(window.foo.oldNamespace).toEqual('awesome')
      })

      it('adds new', function() {
        expect(window.foo.newNamespace).toEqual(jasmine.any(Object))
      })
    })

    it('returns the given namespace string as an object', function () {
      reveived = Namespace.create('foo')

      expect(window.foo).toEqual(reveived)
    })

    it('adds objects on the created namespace', function () {
      Namespace.create('testNS').foo = function (param) {
        return param
      }
      received = window.testNS.foo('bar')
      expect('bar').toEqual(received)
    })
  })

  describe('is()', function() {
    describe('When namespace not exist', function() {
      it('returns false', function() {
        expect(Namespace.is('not.there')).toBeFalsy()
      })
    })

    describe('When namespace exist', function() {
      beforeEach(function () {
        window.is = { there : {} }
      })

      it('returns true', function() {
        expect(Namespace.is('is.there')).toBeTruthy()
      })
    })

    describe('When namespace already exist on a local object', function() {
      var localObj

      beforeEach(function() {
        localObj = { be: { awesome: 'bam' } }
      })

      it('returns true', function() {
        received = Namespace.is(localObj, 'be.awesome')

        expect(received).toBeTruthy()
      })
    })

    describe('When namespace not exist on a local object', function() {
      var localObj

      beforeEach(function() {
        localObj = { be: { awesome: 'bam' } }
      })

      it('returns false', function() {
        received = Namespace.is(localObj, 'be.sad')

        expect(received).toBeFalsy()
      })

    })
  })
})
