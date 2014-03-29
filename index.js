"use strict";

var util = require('util');
var stream = require('stream');

util.inherits(Liquify, stream.Readable);
function Liquify(obj, opts) {
  stream.Readable.call(this, opts);

  this.json = JSON.stringify(obj);
}

Liquify.prototype._read = function _read(size) {
  this.push(this.json);
  this.push(null);
};

function liquify(object) {
  return new Liquify(object);
}

module.exports         = liquify;
module.exports.Liquify = Liquify;
