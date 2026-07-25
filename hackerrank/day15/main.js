'use strict';

const readline = require('readline');

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Solution {

    insert(head, data) {
        const newNode = new Node(data);

        // Si la lista está vacía
        if (head === null) {
            return newNode;
        }

        // Buscar el último nodo
        let current = head;

        while (current.next !== null) {
            current = current.next;
        }

        // Agregar el nuevo nodo al final
        current.next = newNode;

        return head;
    }

    display(head) {
        let current = head;

        while (current !== null) {
            process.stdout.write(current.data + ' ');
            current = current.next;
        }

        console.log();
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const myList = new Solution();
let head = null;

rl.question('¿Cuántos números desea insertar? ', (respuesta) => {

    const T = parseInt(respuesta);
    let contador = 0;

    function pedirNumero() {

        if (contador === T) {
            console.log('\nLista enlazada:');
            myList.display(head);

            rl.close();
            return;
        }

        rl.question(`Número #${contador + 1}: `, (respuesta) => {

            const data = parseInt(respuesta);

            head = myList.insert(head, data);

            contador++;

            pedirNumero();
        });
    }

    pedirNumero();
});