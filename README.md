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
```
