'use strict';

const fs = require('fs');

const n = parseInt(fs.readFileSync(0, 'utf8').trim());

// Convertir a binario
const binario = n.toString(2);

let maximo = 0;
let contador = 0;

for (const bit of binario) {
    if (bit === '1') {
        contador++;
        maximo = Math.max(maximo, contador);
    } else {
        contador = 0;
    }
}

console.log(maximo);