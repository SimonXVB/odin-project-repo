class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    prepend(data) {
        this.head = new Node(data, this.head);
        this.size++
    }

    append(data) {
        let node = new Node(data);
        let current = this.head;

        if(!this.head){
            this.head = node;
        } else {
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++
    }

    length() {
        console.log(this.size);
    }

    first(){
        console.log(this.head.data);
    }

    last() {
        let current = this.head;

        while(current.next) {
            current = current.next;
        }
        console.log(current);
    }

    at(index) {
        let current = this.head;
        let count = 0;

        while(current) {
            if(count === index){
                console.log(current.data);
            }
            count++;
            current = current.next;
        }
    }

    pop() {
        let current = this.head;
        let previous;
        
        if(!this.head) {
            return null;
        }

        if(!this.head.next) {
            return null;
        }
        
        while(current.next) {
            previous = current;
            current = current.next;
        }
        this.size--;
        previous.next = null;
    }

    contains(data) {
        let current = this.head;

        while(current){
            if(current.data === data){
                console.log("true");
                return
            } else {
                current = current.next;
            }
        }
        console.log("false");
    }

    find(data) {
        let current = this.head;
        let index = 0;

        while(current) {
            if(data === current.data){
                console.log(`Index: ${index}`);
                return;
            } else {
                index++;
                current = current.next;
            }
        }
        console.log("NULL");
    }

    toString() {
        let current = this.head;
        let arr = [];

        while(current) {
            arr.push(`(${current.data})`);
            current = current.next;
        }
        arr.push("null");
        console.log(arr.join(" -> "));
    };
}

const linked = new LinkedList();

linked.prepend(100);
linked.append(200);
linked.prepend(300);
linked.length();
linked.first();
linked.at(2);
linked.append(500);
linked.append(500)
linked.contains(400);
linked.find(200);
linked.last();
linked.toString();

console.log(linked);