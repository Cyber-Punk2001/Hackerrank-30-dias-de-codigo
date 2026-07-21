'use strict';

const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);

// Imprimir el arreglo en orden inverso
console.log(arr.reverse().join(' '));