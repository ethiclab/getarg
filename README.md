# getarg [![npm version](https://badge.fury.io/js/%40ethiclab%2Fgetarg.svg)](https://badge.fury.io/js/%40ethiclab%2Fgetarg) [![Build Status](https://travis-ci.com/ethiclab/getarg.svg?branch=master)](https://travis-ci.com/ethiclab/getarg) [![codecov](https://codecov.io/gh/ethiclab/getarg/branch/master/graph/badge.svg)](https://codecov.io/gh/ethiclab/getarg)

Reads <arg-value> from a formatted string like --arg-name <arg-value>

    npm install @ethiclab/getarg

# usage

```javascript
const process = require('process')
const getarg = require("@ethiclab/getarg")

const _argname = getarg(process.argv, "--arg-name", "some optional default")
```
