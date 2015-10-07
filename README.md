# getp
Get nested properties.
Support dots and array descriptions.

## Example

```javascript
var getp = require('getp');

```

```
o                expr                             value
---------------  -------------------------------  ---------
o.u = 1          getp(o, 'u')                     1
o.v = null       getp(o, 'v')                     null
o.z = undefined  getp(o, 'z')                     undefined
o.w.x = 1        getp(o, 'w', 'x')                1
o.w.x = 1        getp(o, ['w', 'x'])              1
o.w.x = 1        getp(o, 'w.x')                   1
o.v = null       getp(o, 'v.x')                   undefined
o.x.y.z.u.v = 1  getp(o, 'x', ['y', 'z'], 'u.v')  1
o["a.b"] = 1     getp(o, 'a.b')                   undefined
o["a.b"] = 1     getp(o, 'a.b', false)            1
```

### getp(obj, name1, name2,..., [parseDots = true])

#### obj

Type: `Anything`

The host object of the property being accessed.

#### name

Type: `String`, `Number`, `Array`

If `Array`, it is expanded as an array of strings.

If `String`, it will be parsed as part of the path to reach the property.

#### parseDots

Type: `Boolean`

Default: `true`

If `false`, name strings will be treated literaly.


### set(o, ...names, v)

```javascript
var set = require('getp/set')
var o = {}
set(o, 'x', 'y', 1)
console.log(o)
// { x: { y: 1 } }

var o = {}
set(o, ['x', 'y'], 1)
console.log(o)
// { x: { y: 1 } }

```

