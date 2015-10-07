
module.exports = function (o) {
  var undef
  if (o == undef) {
    return o
  }
  var names = Array.prototype.concat.apply(
    [], Array.prototype.slice.call(arguments, 1, -1)
  )
  var v = arguments[arguments.length - 1]
  var ret = o
  var name
  while (names.length) {
    name = names.shift()
    if (!o.hasOwnProperty(name) || o[name] == undef) {
      o[name] = {}
    }
    if (names.length === 0) {
      o[name] = v
    } else {
      o = o[name]
    }
  }
  return ret
}

