class Difference {

    constructor(a) {
        this.elements = a;
        this.maximumDifference = 0;
    }

    computeDifference() {
        this.maximumDifference =
            Math.max(...this.elements) - Math.min(...this.elements);
    }
}
