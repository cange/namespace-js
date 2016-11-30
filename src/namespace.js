/**!
 * @author Christian Angermann https://github.com/cange/namespace-js
 * @license MIT
 */
/**
 * @module Namespace
 * @class Namespace
 * @type function
 */
var Namespace = (function(global) {
  'use strict';

  return {

    /**
     * Creates a global object in a single line.
     * @method create
     * @example
     *   Namespace.create('foo.bar'); // -> foo.bar
     *
     * @param {String} namespace
     */
    create: function(namespace) {
      var parent = global,
          parts = namespace.split('.'),
          len = parts.length,
          i = 0,
          part
      ;

      for (; i < len; i++) {
        part = parts[i];
        parent = (parent[part] = parent[part] || {});
      }

      return parent;
    },

    /**
     * Check for global and local objects.
     * @method is
     *
     * @param {String|Object} namespaceOrParent
     * @param {String} [namespace]
     * @return {Boolean} Returns true if namespace already exist.
     */
    is: function(namespaceOrParent, namespace) {
      var parent = global,
          result = false,
          i = 0,
          len,
          parts,
          part
      ;

      if (typeof namespaceOrParent === 'object') {
        parent = namespaceOrParent;
      }
      else {
        namespace = namespaceOrParent;
      }

      parts = namespace.split('.');
      len = parts.length;

      for (; i < len; i++) {
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

}(window || this));

module = module || {};
module.exports = Namespace;
