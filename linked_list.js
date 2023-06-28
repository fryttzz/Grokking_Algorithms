class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    printList() {
        var temp = this.head

        while (temp) {
            console.log(temp.data)
            temp = temp.next
        }
    }
}

llist = new LinkedList()

llist.head = new Node(112)
second = new Node(456)
third = new Node(792)

llist.head.next = second
second.next = third

llist.printList()