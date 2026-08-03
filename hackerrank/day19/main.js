class Calculator {
    divisorSum(n) {
        let sum = 0;

        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                sum += i;
            }
        }

        return sum;
    }
}

// Programa principal
const n = 6; // Cambia este valor para probar

const calculator = new Calculator();

console.log("I implemented: AdvancedArithmetic");
console.log(calculator.divisorSum(n));