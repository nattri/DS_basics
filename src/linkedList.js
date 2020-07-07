class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  createNode(data) {
    return new Node(data);
  }

  addNode(data) {
    const newNode = this.createNode(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let pointerNode = this.head;
    while (pointerNode.next) {
      pointerNode = pointerNode.next;
    }
    pointerNode.next = newNode;
  }

  addNodeAtBeginning(data) {
    const newNode = this.createNode(data);
    const firstNode = this.head;
    this.head = newNode;
    newNode.next = firstNode;
  }

  searchNode(data) {
    if (this.isEmpty()) {
      console.log("Linked list is empty");
      return;
    }
    // If found at first place
    if (this.head.data === data) {
      console.log("Node found:", this.head);
      return;
    }
    let pointer = this.head;
    while (pointer && pointer.next !== null) {
      pointer = pointer.next;
      if (pointer.data === data) {
        console.log("Node found:", pointer);
        return;
      }
    }
    console.log("Not Found any node");
  }

  deleteNode(data) {
    let deleteCount = 0;
    if (this.isEmpty()) {
      console.log("Linked list is empty");
      return;
    }
    let pointer = this.head;
    while (pointer && pointer.next !== null) {
      if (pointer.next.data === data) {
        pointer.next = pointer.next.next;
        console.log("Node deleted");
        deleteCount++;
      } else {
        pointer = pointer.next;
      }
    }
    if (!deleteCount) {
      console.log("Not Found any node for deletion");
    }
  }

  printList() {
    let pointer = this.head;
    while (pointer) {
      console.log(pointer.data);
      pointer = pointer.next;
    }
  }

  clearList() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }
}

const init = () => {
  const linkedList = new LinkedList();
  // Initial list
  // console.log("Initial list", linkedList);
  linkedList.addNode(20);
  linkedList.addNode(30);
  linkedList.addNode(40);
  linkedList.addNode(40);
  linkedList.addNode(30);
  linkedList.addNodeAtBeginning(10);
  // linkedList.searchNode(50);
  //linkedList.deleteNode(40);
  linkedList.printList();

  console.log(linkedList);
};

export default init;
