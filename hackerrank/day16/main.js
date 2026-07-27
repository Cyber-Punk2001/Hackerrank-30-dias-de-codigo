'use strict';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (S) => {

    try {
        const numero = Number(S);

        if (Number.isNaN(numero)) {
            throw new Error();
        }

        console.log(numero);
    }
    catch (error) {
        console.log('Bad String');
    }

    rl.close();
});