class Solution {
    constructor() {
        this.stack = [];
        this.queue = [];
    }

    pushCharacter(ch) {
        this.stack.push(ch);
    }

    enqueueCharacter(ch) {
        this.queue.push(ch);
    }

    popCharacter() {
        return this.stack.pop();
    }

    dequeueCharacter() {
        return this.queue.shift();
    }
}