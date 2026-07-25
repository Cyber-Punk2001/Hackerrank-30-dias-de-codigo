'use strict';

const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const t = parseInt(input[0]);

for (let i = 1; i <= t; i++) {
    const s = input[i];

    let pares = "";
    let impares = "";

    for (let j = 0; j < s.length; j++) {
        if (j % 2 === 0) {
            pares += s[j];
        } else {
            impares += s[j];
        }
    }

    console.log(`${pares} ${impares}`);
}