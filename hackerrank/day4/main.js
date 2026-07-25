'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

class Person {
    constructor(initialAge) {
        if (initialAge < 0) {
            this.age = 0;
            console.log("Age is not valid, setting age to 0.");
        } else {
            this.age = initialAge;
        }
    }

    amIOld() {
        if (this.age < 13) {
            console.log("You are young.");
        } else if (this.age < 18) {
            console.log("You are a teenager.");
        } else {
            console.log("You are old.");
        }
    }

    yearPasses() {
        this.age++;
    }
}

function main() {
    const T = parseInt(readLine());

    for (let i = 0; i < T; i++) {
        const age = parseInt(readLine());
        const p = new Person(age);

        p.amIOld();

        for (let j = 0; j < 3; j++) {
            p.yearPasses();
        }

        p.amIOld();
        console.log();
    }
}