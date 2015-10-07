var test = require('tap').test
var set = require('../set')

test('set', function(t) {
  t.same(
    set({}, 'x', 1),
    { x: 1 }
  )

  t.same(
    set({}, 'x', 'y', 1),
    { x: { y: 1 } }
  )

  t.same(
    set({}, ['x', 'y'], 1),
    { x: { y: 1 } }
  )

  t.end()
})

