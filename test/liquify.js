var Cat = require('concat-stream');
var test = require('tap').test;
var liquify = require('../index.js');

test(function (t) {
  var a = {
    a: 'a'
  };
  liquify(a).pipe(Cat(function (final) {
    t.equal(final.toString(), JSON.stringify(a));
    t.end();
  }));
});

test(function (t) {
  liquify(null).pipe(Cat(function (final) {
    t.equal(final.toString(), "null");
    t.end();
  }));
});

test(function (t) {
  liquify().pipe(Cat(function (final) {
    t.equal(final.toString(), "");
    t.end();
  }));
});

test(function (t) {
  liquify(12).pipe(Cat(function (final) {
    t.equal(final.toString(), "12");
    t.end();
  }));
});

test(function (t) {
  liquify("hello world").pipe(Cat(function (final) {
    t.equal(final.toString(), '"hello world"');
    t.end();
  }));
});

test(function (t) {
  var a = {};
  a.a = a;
  t.throws(function(){
    liquify(a);
  });
  t.end();
});
