const fs = require("fs");

// Leer toda la entrada
const input = fs.readFileSync(0, "utf8").trim().split("\n");

function main() {
    let i = 4;
    let d = 4.0;
    let s = "HackerRank ";

    // Declarar variables
    let secondInt;
    let secondDouble;
    let secondString;

    // Leer datos
    secondInt = parseInt(input[0]);
    secondDouble = parseFloat(input[1]);
    secondString = input[2];

    // Imprimir resultados
    console.log(i + secondInt);
    console.log((d + secondDouble).toFixed(1));
    console.log(s + secondString);
}

main();