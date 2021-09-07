class Node {
  constructor(value, previus = null, next = null) {
    this.value = value;
    this.previus = previus;
    this.next = next;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  //   time O(1) | space O(1)
  setHead(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.insetrBefore(node, this.head);
  }

  //   time O(1) | space O(1)
  setTail(node) {
    if (!this.tail) {
        this.setHead(node);
    //   this.head = node;
    //   this.tail = node;
      return;
    }
    this.insetrAfter(node, this.tail);
  }

  //   time O(1) | space O(1)
  insetrBefore(node, targetNode) {
    node.next = targetNode;
    node.previus = targetNode.previus;

    if (targetNode.previus) targetNode.previus.next = node;
    targetNode.previus = node;
    if (this.head === targetNode) this.head = node;
  }

  //   time O(1) | space O(1)
  insetrAfter(node, targetNode) {
    node.previus = targetNode;
    node.next = targetNode.next;

    if (targetNode.next) targetNode.next.previus = node;
    targetNode.next = node;
    if (this.tail === targetNode) this.tail = node;
  }

  //   time O(p) | space O(1) where p - position + 1
  insertAtPosition(node, position) {
    if (position === 0) {
      this.setHead(node);
    }
    let currentNode = this.head;
    while (--position) {
      if (currentNode.next) currentNode = currentNode.next;
      else break;
    }

    this.insetrAfter(node, currentNode);
  }

  //   time O(1) | space O(1)
  remove(node) {
    if (node.previus) node.previus.next = node.next;
    if (node.next) node.next.previus = node.previus;
    if (this.tail === node) this.tail = node.previus;
    if (this.head === node) this.head = node.next;

    node.next = null;
    node.previus = null;
  }

  //   time O(n) | space O(1)
  removeNodesWithValue(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        currentNode = currentNode.next;
        this.remove(currentNode.previus);
      } else currentNode = currentNode.next;
    }
  }

  //   time O(n) | space O(1)
  containsNodeWithValue(value) {
    let currentPosition = this.head;
    while (currentPosition) {
      if (currentPosition.value === value) return true;
      currentPosition = currentPosition.next;
    }
    return false;
  }

  //   time O(n) | space O(1)
  print() {
    const res = [];
    let currentPosition = this.head;
    while (currentPosition) {
      res.push(currentPosition.value);
      currentPosition = currentPosition.next;
    }
    console.log(res);
  }
}

(() => {
  const list = new List();
  list.setTail(new Node(1));
  list.setTail(new Node(2));
  list.setTail(new Node(3));
  list.setTail(new Node(4));
  list.setTail(new Node(5));

  list.print();

  const value = "Hello World!";
  const node = new Node(value);
  console.log(list.containsNodeWithValue(value), "expected false");
  list.insertAtPosition(node, 2);
  console.log(list.containsNodeWithValue(value), "expected true");

  list.remove(node);
  console.log(list.containsNodeWithValue(value), "expected false");

  list.insertAtPosition(new Node(value), 2);
  list.insertAtPosition(new Node(value), 2);
  console.log(list.containsNodeWithValue(value), "expected true");
  list.removeNodesWithValue(value);
  console.log(list.containsNodeWithValue(value), "expected false");

  list.insetrAfter(new Node("after head"), list.head);
  list.insetrBefore(new Node("before head"), list.head);
  list.setHead(new Node("new head"));
  list.setTail(new Node("new tail"));
  list.print();
})();
