'use strict';

const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let arr = [];

for (let i = 0; i < 6; i++) {
    arr.push(input[i].split(' ').map(Number));
}

let maximo = -63;

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {

        let suma =
            arr[i][j] +
            arr[i][j + 1] +
            arr[i][j + 2] +
            arr[i + 1][j + 1] +
            arr[i + 2][j] +
            arr[i + 2][j + 1] +
            arr[i + 2][j + 2];

        if (suma > maximo)
            maximo = suma;
    }
}

console.log(maximo);
