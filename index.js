
module.exports = function (o) {
  var undef
  var names = Array.prototype.concat.apply(
    [], Array.prototype.slice.call(arguments, 1)
  )
  var parseDots = true
  var len = names.length
  if (typeof names[len - 1] === 'boolean') {
    parseDots = names[len - 1] !== false
    len = len - 1
  }
  var chain = []
  for (var i = 0; i < len; ++i) {
    chain.push.apply(
      chain,
      parseDots && typeof names[i] === 'string'
        ? names[i].split('.')
        : [names[i]]
    )
  }
  if (!chain.length) {
    return o
  }
  while (o != undef) {
    if (chain.length === 1) {
      return o[chain[0]]
    }
    o = o[chain.shift()]
  }
  return undef
}

