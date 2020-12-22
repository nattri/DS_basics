/**
 *
 * @param {*} arr
 */
function bubbleSort(arr) {
  // Used for breaking loop if there is no more swaps required
  // (In bubble sort, largest number is moved to the last, if there is no swap in a complete inner iteration,
  // it means, array is already sorted and we can break)
  let noSwaps = true;
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) {
      break;
    }
  }
  return arr;
}

export default bubbleSort;
