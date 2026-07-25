'use strict';

const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = parseInt(input[0]);

const phoneBook = {};

for (let i = 1; i <= n; i++) {
    const [name, number] = input[i].split(' ');
    phoneBook[name] = number;
}

for (let i = n + 1; i < input.length; i++) {
    const query = input[i];

    if (phoneBook.hasOwnProperty(query)) {
        console.log(`${query}=${phoneBook[query]}`);
    } else {
        console.log("Not found");
    }
}