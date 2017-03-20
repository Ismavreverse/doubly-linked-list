const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    Node(data) {
        this.data = data;
        this.previous = null;
        this.next = null;
    }

    append(data) {
        var node = new Node(data);
        if (this.head == 0 ) {
            this.head = node;
        } else {
            node.data = data;
            head();
        }
        if (this.tail == 0) {
            this.tail = node;
        } else {
            node.data = data;
            tail();
        }
        this.numberOfValues++;
    }

    head() {
        node.next = this.head;
        this.head.previous = node;
    }

    tail() {
        node.previous = this.tail;
        this.tail.next = node;
    }

    at(index) {
        this.length = index;
        if (node.length) {
            Console.log(node.data);
        }
        else {
            Console.log("Please check with valid index");
        }
    }

    insertAt(index, data) {
        this.length= index;
        if (node.length) {
            node.next = this.head;
            node.data = data;
            node.previous = this.tail;
            this.next = node.length++;
            this.previous = node.length;
            this.numberOfValues++;
        }
        else {
            node.data = data;
        } 
    }


    isEmpty() {
        if (this.length == 0) {
            Console.log("Is Empty");
        }
        else
            Console.log("Has Values");
    }

    clear() {
        this.data = null;
        this.previous = null;
        this.next = null;
    }

    deleteAt(index) {
        this.length = index;
        if (node.length) {
            node.next = null;
            node.data = null;
            node.length++;
            node.previous = this.tail;
            this.numberOfValues--;
        }
        else {
            Console.Log("Index is incorrect");
        }
    }

    reverse() {
        var node = new node();
        if (node.length){
        }
    }

    indexOf(data) {}
}

module.exports = LinkedList;
