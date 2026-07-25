'use strict';

const readline = require('readline');

class Difference {
    constructor(a) {
        this.elements = a;
        this.maximumDifference = 0;
    }

    computeDifference() {
        let maximo = this.elements[0];
        let minimo = this.elements[0];

        for (let numero of this.elements) {
            if (numero > maximo) {
                maximo = numero;
            }

            if (numero < minimo) {
                minimo = numero;
            }
        }

        this.maximumDifference = maximo - minimo;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cuántos números desea ingresar? ', (respuesta) => {

    const n = parseInt(respuesta);
    let numeros = [];
    let contador = 0;

    function pedirNumero() {
        if (contador === n) {

            const d = new Difference(numeros);

            d.computeDifference();

            console.log('\nDiferencia máxima: ' + d.maximumDifference);

            rl.close();
            return;
        }

        rl.question(`Número #${contador + 1}: `, (respuesta) => {
            numeros.push(parseInt(respuesta));
            contador++;

            pedirNumero();
        });
    }

    pedirNumero();
});
