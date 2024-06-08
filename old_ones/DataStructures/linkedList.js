class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.tail = null;
        this.head = null;
        this.length = 0;
    }
    push(value) {
        const node = new Node(value);
        if(this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
}