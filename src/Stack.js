/**
 * Stack using linked list
 */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  createNode(data) {
    return new Node(data);
  }

  push(data) {
    const newNode = this.createNode(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Stack is Empty!");
      return;
    }

    const nodeToRemove = this.top;
    this.top = this.top.next;
    nodeToRemove.next = null;
    return nodeToRemove;
  }

  findElement(elem) {
    if (this.isEmpty()) {
      console.log("Stack is Empty!");
      return;
    }
    let pointer = this.top;
    while (pointer) {
      if (pointer.data === elem) {
        console.log("Element Found!");
        return;
      }
      pointer = pointer.next;
    }
    console.log("Element not found!");
  }

  isEmpty() {
    return !this.top;
  }

  printStack() {
    let pointer = this.top;
    while (pointer) {
      console.log(pointer.data);
      pointer = pointer.next;
    }
  }

  clearStack() {
    this.top = null;
  }
}

const init = () => {
  const stack = new Stack();

  stack.push(10);
  stack.push(20);
  stack.push(30);
  // stack.push(40);
  // stack.pop();
  stack.pop();
  stack.printStack();
  stack.clearStack();

  // console.log(stack);
};

export default init;
