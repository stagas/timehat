
/**
 * Test.
 */

var assert = require('assert');
var timehat = require('../');

var id = timehat();

assert('string' == typeof id);
assert(~id.indexOf('-'));
assert(timehat.toDate(id) instanceof Date);
assert(parseInt(id.split('-')[0], 16) === timehat.toDate(id).getTime());

var id = timehat(128, 36);

assert('string' == typeof id);
assert(~id.indexOf('-'));
assert(timehat.toDate(id, 36) instanceof Date);
assert(parseInt(id.split('-')[0], 36) === timehat.toDate(id, 36).getTime());
