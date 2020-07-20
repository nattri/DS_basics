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

  delete() {
    // if it is a leaf node
    // Just remove the node
    // if it has one child
    // copy content of child to parent
    // if it has two children
    // find inorder successor and replace its value, then delete successor node
  }

  preOrder() {
    this._preOrder(this.root);
  }

  _preOrder(node) {
    if (node !== null) {
      console.log(node.data);
      this._preOrder(node.leftNode);
      this._preOrder(node.rightNode);
    }
  }

  inOrder() {
    this._inOrder(this.root);
  }

  _inOrder(node) {
    if (node !== null) {
      this._inOrder(node.leftNode);
      console.log(node.data);
      this._inOrder(node.rightNode);
    }
  }

  postOrder() {
    this._postOrder(this.root);
  }

  _postOrder(node) {
    if (node !== null) {
      this._postOrder(node.leftNode);
      this._postOrder(node.rightNode);
      console.log(node.data);
    }
  }
}

const init = () => {
  const bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(15);
  bst.insert(20);
  bst.insert(8);
  bst.insert(9);
  bst.insert(7);
  bst.insert(13);
  console.log(bst);
  // bst.findNode(10);
  console.log(bst.inOrder());
};

export default init;
