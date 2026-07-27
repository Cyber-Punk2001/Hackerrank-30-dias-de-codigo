'use strict';

const readline = require('readline');

class Calculator {

    power(n, p) {
        if (n < 0 || p < 0) {
            throw new Error("n and p should be non-negative");
        }

        return n ** p;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calculator = new Calculator();

rl.question("¿Cuántos casos desea probar? ", (respuesta) => {

    const cantidad = parseInt(respuesta);
    let contador = 0;

    function siguienteCaso() {

        if (contador === cantidad) {
            rl.close();
            return;
        }

        rl.question(`Caso #${contador + 1}: `, (entrada) => {

            const [n, p] = entrada.split(' ').map(Number);

            try {
                const resultado = calculator.power(n, p);
                console.log("Resultado:", resultado);
            }
            catch (error) {
                console.log(error.message);
            }

            contador++;
            siguienteCaso();
        });
    }

    siguienteCaso();
});