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

    insertAtLast(data){
        const newNode = new Node(data);
        // if the list is empty, make the new node the head;
        if(this.head === null){
            this.head = newNode;
            return;
        }

        // traverse to the last node
        let current = this.head;
        while(current.next !== null){
            current = current.next;
        } 
        current.next = newNode;
    }

    insertAtIndex(data,index){
        if(index < 0 || index > this.size()){
        //    throw new Error("Invalid index");
        console.error("invalid index");
        return;
        } 

        const newNode = new Node(data);
        if(index === 0){
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;
        for(let i= 0; i < index - 1; i++){
            current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    }

    size(){
        let count = 0;
        let current = this.head;
        while(current){
            count++;
            current = current.next;
        }
    return count;
    }

    printList(){
        let current = this.head;
        while(current){
            console.log(current.data,"->>>>",current.next)
            current = current.next;
        }
    }

    

}

const list = new LinkedList();
// list.insertAtHead(10);
// list.insertAtHead(20);
// list.insertAtHead(30);
// list.insertAtHead(40);
// list.insertAtHead(50);
// list.insertAtHead(60);


list.insertAtLast(10);
list.insertAtLast(20);
list.insertAtLast(30);
list.insertAtLast(40);

list.insertAtIndex(25,20)


list.printList()
