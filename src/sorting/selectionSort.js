function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(arr, min, i);
    }
  }
  return arr;
}

export default selectionSort;
