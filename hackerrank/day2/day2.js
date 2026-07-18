const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function solve(comida, propina, impuestos) {
    let total = comida + (comida * propina / 100) + (comida * impuestos / 100);

    console.log(Math.round(total));
    console.log(`El total de la comida es: ${Math.round(total)}`);
}

rl.question("Digite el monto de la comida (Decimal): ", (meal) => {
    rl.question("Digite el porcentaje de propina (Entero): ", (tip) => {
        rl.question("Digite el porcentaje de impuestos (Entero): ", (tax) => {

            solve(parseFloat(meal), parseInt(tip), parseInt(tax));

            rl.close();
        });
    });
});