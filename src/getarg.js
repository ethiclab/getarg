(function() {
  let firstOrSecond = (a, b) => a !== undefined ? a : b
  let getarg = (r, n, d) => firstOrSecond(r[1 + r.map((a, i) => { return { i: i, a: a} }).filter(a => a.a === n).map(a => a.i)[0]], d)
  module.exports = getarg
})()
