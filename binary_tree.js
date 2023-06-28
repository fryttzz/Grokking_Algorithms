class Node {
    constructor(key) {
        this.left = null
        this.right = null
        this.value = key
    }
}

var root = null

root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)

root.left.left = new Node(4)