// const array = [2, 1, 2, 2, 2, 3, 4, 2];
const array = [2, 1, 12, 3, 4, 5, 7, 1, 3, 2, 2, 1, 3, 4, 2];

console.log(moveElementToEnd(array, 2));

// time O(n) | space O(1)
function moveElementToEnd(array, toMove) {
  let lastIndexToMove = null;

  for (let index = 0; index < array.length; index++) {
    if (array[index] === toMove) {
      if (lastIndexToMove === null) {
        lastIndexToMove = index;
      }
    } else if (lastIndexToMove !== null) {
      array[lastIndexToMove] = array[index];
      array[index] = toMove;
      lastIndexToMove++;
    }
  }

  return array;
}

// O(n) time | O(1) space - where n is the length of the array
// function moveElementToEnd(array, toMove) {
//   let i = 0;
//   let j = array.length - 1;
//   while (i < j) {
//     while (i < j && array[j] === toMove) j--;
//     if (array[i] === toMove) swap(i, j, array);
//     i++;
//   }
//   return array;
// }
// function swap(i, j, array) {
//   const temp = array[j];
//   array[j] = array[i];
//   array[i] = temp;
// }
