/**
 * Dependencies
 */

var cleanArray = require('clean-array')

/**
 * Aggressively remove empty values from `arr`.
 *
 * @param  {array} arr
 * @return {array}
 *
 * @api public
 */

function purgeArray(arr) {
  var results = cleanArray(arr)
  return results.filter(Boolean)
}

/**
 * Exports
 */

module.exports = purgeArray
