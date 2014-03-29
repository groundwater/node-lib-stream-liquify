var Cat = require('concat-stream');
var test = require('tap').test;
var liquify = require('../index.js');

test(function (t) {
  var str = liquify({a: 'A'});
  var x = str.read(1);
  t.equal(x.length, 1);
  t.end();
});

test(function (t) {
  var str = liquify({a: 'A'});
  var x = str.read(0);
  t.strictEqual(x, null);
  t.end();
});

test(function (t) {
  var str = liquify({});
  var x = str.read(10);
  t.strictEqual(x.length, 2);
  t.end();
});
