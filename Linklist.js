// Node class representing a single node in the linked list
class Node {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// LinkedList class containing methods to create and display the list
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to create a linked list from an array of numbers
    createList(nums) {
        let dummyHead = new Node(0);  // Dummy node for easier list creation
        let current = dummyHead;

        for (let num of nums) {
            current.next = new Node(num);
            current = current.next;
        }

        this.head = dummyHead.next; // Point head to the first actual node
    }

    // Method to print the linked list elements
    printList() {
        let current = this.head;
        let result = [];

        while (current !== null) {
            result.push(current.val);
            current = current.next;
        }

        console.log("Linked List:", result.join(" -> "));
    }

    // Method to insert a node at the end of the list
    insertAtEnd(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Method to delete a node by value
    deleteNode(val) {
        if (!this.head) return;

        // If head itself needs to be deleted
        if (this.head.val === val) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            if (current.next.val === val) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }
}

// Example Usage
let linkedList = new LinkedList();
linkedList.createList([1, 2, 3, 4, 5]);
linkedList.printList();  // Output: Linked List: 1 -> 2 -> 3 -> 4 -> 5

linkedList.insertAtEnd(6);  
linkedList.printList();  // Output: Linked List: 1 -> 2 -> 3 -> 4 -> 5 -> 6

linkedList.deleteNode(3);  
linkedList.printList();  // Output: Linked List: 1 -> 2 -> 4 -> 5 -> 6
