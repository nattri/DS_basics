class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this._bubbleUp();
  }

  _swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  _bubbleUp() {
    let index = this.values.length - 1;
    while (true) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.values[parentIndex] < this.values[index]) {
        this._swap(this.values, parentIndex, index);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  extractMax() {
    // Get root node and swap with last node
    const maxVal = this.values[0];
    const lastNodeVal = this.values.pop();
    if (!this.values.length) return maxVal;
    this.values[0] = lastNodeVal;

    // Sink down (adjust heap)
    let elemIndex = 0;
    while (true) {
      let leftChildIndex = 2 * elemIndex + 1;
      let rightChildIndex = leftChildIndex + 1;
      let leftChild = this.values[leftChildIndex];
      let rightChild = this.values[rightChildIndex];
      if (
        this.values[elemIndex] < leftChild ||
        this.values[elemIndex] < rightChild
      ) {
        let indexToSwap =
          rightChild > leftChild ? rightChildIndex : leftChildIndex;
        this._swap(this.values, elemIndex, indexToSwap);
        elemIndex = indexToSwap;
      } else break;
    }

    return maxVal;
  }
}

const init = () => {
  // Test data
  const heap = new MaxBinaryHeap();
  heap.insert(10);
  heap.insert(20);
  heap.insert(30);
  heap.insert(40);
  heap.insert(5);
  heap.insert(50);
  // heap.extractMax();
  // heap.extractMax();
  // heap.extractMax();
  console.log("heap is", heap);
};

export default init;
