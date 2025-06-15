class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertAtHead(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    printList(){
        let current = this.head;
        while(current){
            console.log(current.data);
           current= current.next;
        }
    }
}

const list = new LinkedList();
list.insertAtHead(10);
list.insertAtHead(20)
list.printList()