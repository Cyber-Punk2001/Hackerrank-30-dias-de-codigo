'use strict';

const fs = require('fs');

const N = parseInt(fs.readFileSync(0, 'utf8').trim(), 10);

if (N % 2 !== 0) {
    console.log("Weird");
} else if (N >= 2 && N <= 5) {
    console.log("Not Weird");
} else if (N >= 6 && N <= 20) {
    console.log("Weird");
} else {
    console.log("Not Weird");
}