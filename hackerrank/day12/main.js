class Student extends Person {

    constructor(firstName, lastName, idNumber, scores) {
        super(firstName, lastName, idNumber);
        this.scores = scores;
    }

    calculate() {
        let suma = 0;

        for (let score of this.scores) {
            suma += score;
        }

        let promedio = suma / this.scores.length;

        if (promedio >= 90) return 'O';
        if (promedio >= 80) return 'E';
        if (promedio >= 70) return 'A';
        if (promedio >= 55) return 'P';
        if (promedio >= 40) return 'D';

        return 'T';
    }
}