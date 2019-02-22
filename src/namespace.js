module.exports = (function(global) {


  return {

    /**
     * Creates a global object in a single line

     * @example
     *   Namespace.create('foo.bar'); // -> foo.bar

     * @param {String} namespace
     */
    create: (namespace) => {
      const parent = global
      const parts = namespace.split('.')
      const len = parts.length
      let i = 0
      let part
      

      for (; i < len; i++) {
        part = parts[i]
        parent = (parent[part] = parent[part] || {})
      }

      return parent
    },

    /**
     * Check for global and local objects.


     * @param {String|Object} namespaceOrParent
     * @param {String} [namespace]
     * @return {Boolean} Returns true if namespace already exist.
     */
    is: (namespaceOrParent, namespace) => {
      var parent = global
      const result = false
      let i = 0
      let len
      let parts
      let part
      

      if (typeof namespaceOrParent === 'object') {
        parent = namespaceOrParent
      }
      else {
        namespace = namespaceOrParent
      }

      parts = namespace.split('.')
      len = parts.length

      for (; i < len; i++) {
        part = parts[i]

        if (!parent[part]) {
          result = false
          return false
        }
        parent = parent[part]
        result = true
      }

      return result
    }
  }
}(window || this))
