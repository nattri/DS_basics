class Node {
  constructor(data) {
    this.data = data;
    this.leftNode = null;
    this.rightNode = null;
  }
}

/**
 * Binary search tree implmentation
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  createNode(data) {
    return new Node(data);
  }

  insert(data) {
    if (!this.root) {
      this.root = this.createNode(data);
      return;
    }

    // find place & insert
    let current = this.root;
    let parent = null;
    while (1) {
      parent = current;
      if (data < current.data) {
        current = current.leftNode;
        if (!current) {
          parent.leftNode = this.createNode(data);
          return;
        }
      } else {
        current = current.rightNode;
        if (!current) {
          parent.rightNode = this.createNode(data);
          return;
        }
      }
    }
  }

  findNode(data) {
    this._findNode(data, this.root);
  }

  _findNode(data, node) {
    if (!node) {
      console.log("Node not found!");
      return;
    }
    if (data === node.data) {
      console.log("Node found!");
      return;
    }
    if (data < node.data) {
      this._findNode(data, node.leftNode);
    } else {
      this._findNode(data, node.rightNode);
    }
  }

  BFS() {}

  DFS() {}

  delete() {}

  inOrder() {}

  preOrder() {}

  postOrder() {}
}

const init = () => {
  const bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(15);
  bst.insert(20);
  bst.insert(8);
  bst.insert(9);
  bst.insert(17);
  // console.log(bst);
  bst.findNode(10);
};

export default init;
