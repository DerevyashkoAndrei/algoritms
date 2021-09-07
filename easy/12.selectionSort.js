const array = [8, 5, 2, 9, 5, 6, 3];

console.log(selectionSort(array));

// time O(n^2) | space O(1) 
function selectionSort(array) {
  let swap, smaller;

  for (let i = 0; i < array.length; i++) {
    smaller = i;
    for (let index = i + 1 ; index < array.length; index++) {
        if (array[smaller] > array[index]) {
          smaller = index;
        }
      }
  
      swap = array[i];
      array[i] = array[smaller];
      array[smaller] = swap;
  }


  return array;
}
