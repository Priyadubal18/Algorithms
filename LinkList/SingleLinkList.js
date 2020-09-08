class Node{    
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkList{
    constructor(data){
        this.head = null;       
    }

    insertBegin(element){
        let newNode = new Node(element);
        if(! this.head){
            this.head = newNode
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    addEnd(element){        
        let newNode = new Node(element);
        if(this.head == null){
            this.head= newNode;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode
        }
    }
    remove(element){
        let current = this.head;
        let previous = null;
        while(current){
            if(current.data == element){
                if(! previous){
                    this.head = current.next;
                }else{
                    previous.next = current.next;
                }
                return current;
            }
            previous = current;
            current = current.next;
        } 
    }
    insertAfterElement(element, elementAfter){
        debugger;
        let newNode = new Node(element);
        if(! this.head){
            this.head = newNode;
        }else{
            let current = this.head;
            let prev = null;

            while(current){
                if(current.data == elementAfter){
                    let temp = current.next;
                    current.next = newNode;
                    newNode.next = temp;
                    break;
                }
                current = current.next;
            }

        }
    }

    printList(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }

}

let ll = new LinkList();
ll.addEnd(5);
ll.addEnd(6);
ll.addEnd(7);
ll.addEnd(8);
ll.addEnd(9);
ll.insertBegin(4);
let removeNode = ll.remove(5);
console.log("Remove node", removeNode);
let removeNode2 = ll.remove(4);
console.log("Remove node", removeNode2);
ll.insertAfterElement(11, 7);
ll.printList();
