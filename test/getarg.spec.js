const assert = require('assert')
const getarg = require("../src/getarg")

function test_getarg() {
 assert.strictEqual(getarg([], "--a"), undefined)
 assert.strictEqual(getarg(["--a"], "--a"), undefined)
 assert.deepEqual(getarg(["--a", "b"], "--a"), "b")
}

test_getarg()
