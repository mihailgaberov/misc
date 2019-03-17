function merge(left, right){
  const result = [];

  while (left.length > 0 && right.length > 0){
    if (left[0] < right[0]){
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left).concat(right);
}

// Recursive version
function mergeSort(items){

  if (items.length === 1) {
    return items;
  }

  const middle = Math.floor(items.length / 2),
    left = items.slice(0, middle),
    right = items.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

// Iterative version
function mergeSortIterative(items){

  if (items.length === 1) {
    return items;
  }

  const work = [];
  for (var i=0, len=items.length; i < len; i++){
    work.push([items[i]]);
  }
  work.push([]);  //in case of odd number of items

  for (let lim=len; lim > 1; lim = Math.floor((lim+1)/2)){
    for (var j=0,k=0; k < lim; j++, k+=2){
      work[j] = merge(work[k], work[k+1]);
    }
    work[j] = [];  //in case of odd number of items
  }

  return work[0];
}

console.log(mergeSort([3,21,5,7,2,3,4,6,2]))
console.log(mergeSortIterative([3,21,5,7,2,3,4,6,2]))
console.log(mergeSort([9,7,8,6,5,4,3,2,5,1]))
console.log(mergeSortIterative([9,7,8,6,5,4,3,2,5,1]))
