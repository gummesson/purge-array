/**
 * Dependencies
 */

var test       = require('tape')
var purgeArray = require('../')

/**
 * Tests
 */

test('purgeArray(arr)', function(assert) {
  var actual   = purgeArray([null, undefined, [], {}, '', true, false, 1, 0, 'string'])
  var expected = [true, 1, 'string']
  assert.deepEqual(actual, expected, 'removes empty values aggressively')
  assert.end()
})
