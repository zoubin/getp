require('console.table');
var _getp = require('..');

function getp() {
  var v = _getp.apply(null, arguments);
  return v === undefined ? 'undefined' : v;
}

var o = {
  u: 1,
  v: null,
  w: {
    x: 1,
  },
  x: {
    y: {
      z: {
        u: {
          v: 1,
        },
      },
    },
  },
  'a.b': 1,
};

console.table([
  {
    o: 'o.u = 1',
    expr: "getp(o, 'u')",
    value: getp(o, 'u'),
  },
  {
    o: 'o.v = null',
    expr: "getp(o, 'v')",
    value: getp(o, 'v'),
  },
  {
    expr: "getp(o, 'z')",
    value: getp(o, 'z'),
    o: 'o.z = undefined',
  },
  {
    expr: "getp(o, 'w', 'x')",
    value: getp(o, 'w', 'x'),
    o: 'o.w.x = 1',
  },
  {
    expr: "getp(o, ['w', 'x'])",
    value: getp(o, ['w', 'x']),
    o: 'o.w.x = 1',
  },
  {
    expr: "getp(o, 'w.x')",
    value: getp(o, 'w.x'),
    o: 'o.w.x = 1',
  },
  {
    expr: "getp(o, 'v.x')",
    value: getp(o, 'v.x'),
    o: 'o.v = null',
  },
  {
    expr: "getp(o, 'x', ['y', 'z'], 'u.v')",
    value: getp(o, 'x', ['y', 'z'], 'u.v'),
    o: 'o.x.y.z.u.v = 1',
  },
  {
    expr: "getp(o, 'a.b')",
    value: getp(o, 'a.b'),
    o: 'o["a.b"] = 1',
  },
  {
    expr: "getp(o, 'a.b', false)",
    value: getp(o, 'a.b', false),
    o: 'o["a.b"] = 1',
  },
]);

