import Namespace from './namespace'

describe('Namespace', () => {
  let received

  describe('create()', () => {
    describe('When single namespace is given', () => {
      beforeEach( () => {
        Namespace.create('testNS')
      })

      it('creates single object', () => {
        expect(typeof window.testNS).toEqual('object')
      })
    })

    describe('When nested namespace is given', () => {
      beforeEach( () => {
        Namespace.create('testNS.be.awesome')
      })

      it('creats deep object chains', () => {
        expect(typeof window.testNS.be.awesome).toEqual('object')
      })
    })

    describe('When namespace already given', () => {
      beforeEach( () => {
        window.foo = { oldNamespace: 'awesome' }

        Namespace.create('foo.newNamespace')
      })

      it('do not overwrite', () => {
        expect(window.foo.oldNamespace).toEqual('awesome')
      })

      it('adds new', () => {
        expect(window.foo.newNamespace).toEqual(jasmine.any(Object))
      })
    })

    it('returns the given namespace string as an object', () => {
      received = Namespace.create('foo')

      expect(window.foo).toEqual(received)
    })

    it('adds objects on the created namespace', () => {
      Namespace.create('testNS').foo = (param) => {
        return param
      }
      received = window.testNS.foo('bar')
      expect('bar').toEqual(received)
    })
  })

  describe('is()', () => {
    describe('When namespace not exist', () => {
      it('returns false', () => {
        expect(Namespace.is('not.there')).toBeFalsy()
      })
    })

    describe('When namespace exist', () => {
      beforeEach( () => {
        window.is = { there: {} }
      })

      it('returns true', () => {
        expect(Namespace.is('is.there')).toBeTruthy()
      })
    })

    describe('When namespace already exist on a local object', () => {
      var localObj

      beforeEach(() => {
        localObj = { be: { awesome: 'bam' } }
      })

      it('returns true', () => {
        received = Namespace.is(localObj, 'be.awesome')

        expect(received).toBeTruthy()
      })
    })

    describe('When namespace not exist on a local object', () => {
      var localObj

      beforeEach(() => {
        localObj = { be: { awesome: 'bam' } }
      })

      it('returns false', () => {
        received = Namespace.is(localObj, 'be.sad')

        expect(received).toBeFalsy()
      })
    })
  })
})
