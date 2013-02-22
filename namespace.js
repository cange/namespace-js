var Namespace = (function (global) {

  'use strict';

  return {

    /**
     * Creates a global object in a single line.
     * // example
     * Namespace.create('foo.bar'); // -> foo.bar
     *
     * @param {string} namespace
     */
    create: function (namespace) {
      var parent = global,
        parts = namespace.split('.'),
        len = parts.length,
        part,
        i
      ;

      for (i = 0; i < len; i++) {
        part = parts[i];
        parent = (parent[part] = parent[part] || {});
      }
    },

    /**
     * Check for global object.
     * // example
     * Namespace.is('foo.bar'); // -> false
     * Namespace.create('foo.bar'); // -> foo.bar
     * Namespace.is('foo.bar'); // -> true
     *
     * @param {string} namespace
     */
    is: function (namespace) {
      var parent = global,
        result = false,
        parts = namespace.split('.'),
        len = parts.length,
        part,
        i
      ;
      for (i = 0; i < len; i++) {
        part = parts[i];

        if (!parent[part]) {
          result = false;
          return false;
        }
        parent = parent[part];
        result = true;
      }

      return result;
    }

  };

}(this));
