var test = require('tap').test;
var getp = require('..');

var o = {
  x: {
    y: {
      z: 1,
      w: null,
      u: {
        v: {
          w: 1,
        },
      },
    },
  },
};

test('normal', function(t) {
  t.equal(
    getp(o),
    o
  );

  t.equal(
    getp(o, 'x'),
    o.x
  );

  t.equal(
    getp(o, 'y'),
    undefined
  );

  t.end();
});

test('array', function(t) {
  t.equal(
    getp(o, 'x', 'y', 'z'),
    1
  );

  t.equal(
    getp(o, ['x', 'y', 'z']),
    1
  );

  t.equal(
    getp(o, 'y'),
    undefined
  );

  t.equal(
    getp(o, 'x', 'v', 'z'),
    undefined
  );

  t.equal(
    getp(o, 'x', 'y', 'z', 'v'),
    undefined
  );

  t.equal(
    getp(o, 'x', 'y', 'w'),
    null
  );

  t.equal(
    getp(o, 'x', 'y', 'w', 'v'),
    undefined
  );

  t.end();
});

test('dots', function(t) {
  t.equal(
    getp(o, 'x.y.z'),
    1
  );

  t.equal(
    getp(o, 'x.v.z'),
    undefined
  );

  t.equal(
    getp(o, 'x.y.z.v'),
    undefined
  );

  t.equal(
    getp(o, 'x.y.w'),
    null
  );

  t.equal(
    getp(o, 'x.y.w.v'),
    undefined
  );
  t.end();
});

test('mixed', function(t) {
  t.equal(
    getp(o, 'x', 'y.z'),
    1
  );

  t.equal(
    getp(o, 'x', ['y', 'z']),
    1
  );

  t.equal(
    getp(o, 'x', ['y', 'u'], 'v.w'),
    1
  );
  t.end();
});

