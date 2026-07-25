const readline = require("readline");

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Solution {
    insert(head, data) {
        const newNode = new Node(data);

        if (head === null) {
            return newNode;
        }

        let current = head;

        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;

        return head;
    }

    display(head) {
        let current = head;

        while (current !== null) {
            process.stdout.write(current.data + " ");
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

rl.question("¿Cuántos números desea insertar? ", (cantidad) => {
    let T = parseInt(cantidad);
    let contador = 0;

    function leerNumero() {
        if (contador === T) {
            console.log("\nLista enlazada:");
            myList.display(head);
            rl.close();
            return;
        }

        rl.question(`Número #${contador + 1}: `, (valor) => {
            head = myList.insert(head, parseInt(valor));
            contador++;
            leerNumero();
        });
    }

    leerNumero();
});