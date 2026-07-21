'use strict';

const fs = require('fs');

const n = parseInt(fs.readFileSync(0, 'utf8').trim());

function factorial(n) {
    if (n === 0 || n === 1)
        return 1;

    return n * factorial(n - 1);
}

console.log(factorial(n));
