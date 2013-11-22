
/*!
 *
 * timehat
 *
 * monotonic-timestamp + hat = sortable unique ids
 *
 * MIT
 *
 */

/**
 * Module dependencies.
 */

var timestamp = require('monotonic-timestamp');
var hat = require('hat');

/**
 * Expose `timehat`.
 */

module.exports = timehat;

/**
 * Generate a timestamped unique id.
 *
 * @param {Number} [bits]
 * @param {Number} [base]
 * @return {String}
 * @api public
 */

function timehat(bits, base){
  return timestamp().toString(base || 16) + '-' + hat(bits, base);
}

/**
 * Extract date from `id`.
 *
 * @param {String} id
 * @param {Number} [base]
 * @return {Date}
 * @api public
 */

timehat.toDate = function(id, base){
  var time = parseInt(id.split('-')[0], base || 16);
  return new Date(time);
};
