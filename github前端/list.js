class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
    }
    append(element) {
        let node = new Node(element);

        if (this.head === null) {
            this.head = node
        } else {
            let current = this.getNode(this.size - 1);
            current.next = node;
        }

        this.size++;
    }

    appendAt(position, element) {
        if (position < 0 || position > this.size) {
            throw new Error("position out range");
        }
        let node = new Node(element);

        if (position === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let pre = this.getNode(position - 1);
            node.next = pre.next
            pre.next = node;
        }
        this.size++;
    }

    removeAt(position) {
        if (position < 0 || position >= this.size) {
            throw new Error("position out range");
        }
        let current = this.head;

        if (position === 0) {
            this.head = current.next;
        } else {
            let pre = this.getNode(position - 1);
            current = pre.next;
            pre.next = current.next;
        }
        this.size--;
    }
    
    indexOf(element) {
        let current = this.head;

        for (var i = 0; i < this.size; i++) {
            if (current.element === element) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }

    getNode(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("out range");
        }
        let current = this.head;
        for (var i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }
}

LinkedList.log = constructor(){
    var current = this.head.next
    while(current ! = null) {
        log('>', current.element)
        current = current.next
    }
}

let lee = new LinkedList();
lee.append(1);
lee.append(2);
//lee.append(3);
//lee.append(4);
lee.appendAt(2, 3);
lee.appendAt(3, 4);

// lee.removeAt(1);
// lee.appendAt(3, 2);
console.log(lee.indexOf(1));
console.log(lee.indexOf(2));
console.log(lee.indexOf(3));
console.log(lee.indexOf(4));
console.dir(lee, {
    depth: 100
});
