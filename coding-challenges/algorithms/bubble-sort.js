/*
* Given an array, a, of size n distinct elements,
* sort the array in ascending order using the Bubble Sort
* algorithm. Once sorted, print the following  lines:

* Array is sorted in numSwaps swaps.
* where numSwaps is the number of swaps that took place.
* First Element: firstElement
* where firstElement is the first element in the sorted array.
* Last Element: lastElement
* where lastElement is the last element in the sorted array.
*/
function swap(array, a, b) {
  /* const temp = array[a];
  array[a] = array[b];
  array[b] = temp; */ // classic way
  [array[a], array[b]] = [array[b], array[a]]; // ES2015 way
}


function bubbleSort(arr, n) {
  let swaps = 0;
  for (let i = 0; i < n; i++) {
    // Track number of elements swapped during a single array traversal
    let numberOfSwaps = 0;

    for (let j = 0; j < n - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        numberOfSwaps++;
      }
    }

    // If no elements were swapped during a traversal, array is sorted
    if (numberOfSwaps === 0) {
      break;
    }
    swaps += numberOfSwaps;
  }

  return {swaps, arr};
}

const { swaps, arr } = bubbleSort([1,2,3], 3);
// const {swaps, arr} = bubbleSort([3, 2, 1], 3);
console.log(`Array is sorted in ${swaps} swaps.`);
console.log('First Element:', arr[0]);
console.log('Last Element:', arr[arr.length - 1]);

